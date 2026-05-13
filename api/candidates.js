const POLYMARKET_API_BASE_URL = "https://gamma-api.polymarket.com/events/slug/";
const POLYMARKET_CLOB_BASE_URL = "https://clob.polymarket.com";
const WEATHER_API_BASE_URL = "https://api.open-meteo.com/v1/forecast";
const USER_AGENT = "city-stat-bot-api";

const cities = [
  ["London", "EGLC", 51.5053, 0.0553, "Europe/London"],
  ["Paris", "LFPB", 48.9694, 2.4414, "Europe/Paris"],
  ["Beijing", "ZBAA", 40.0774, 116.5967, "Asia/Shanghai"],
  ["Dallas", "KDAL", 32.8459, -96.8509, "America/Chicago"],
  ["Taipei", "RCSS", 25.0697, 121.5525, "Asia/Taipei"],
  ["Seoul", "RKSI", 37.4602, 126.4407, "Asia/Seoul"],
  ["Hong Kong", "VHHH", 22.308, 113.9185, "Asia/Hong_Kong"],
  ["Singapore", "WSSS", 1.3644, 103.9915, "Asia/Singapore"],
  ["Milan", "LIMC", 45.6306, 8.7281, "Europe/Rome"],
  ["Madrid", "LEMD", 40.4983, -3.5676, "Europe/Madrid"],
  ["Shanghai", "ZSPD", 31.1434, 121.8052, "Asia/Shanghai"],
  ["Miami", "KMIA", 25.7959, -80.287, "America/New_York"],
  ["Ankara", "LTAC", 40.1281, 32.9951, "Europe/Istanbul"],
  ["Sao Paulo", "SBGR", -23.4356, -46.4731, "America/Sao_Paulo"],
  ["Chongqing", "ZUCK", 29.7192, 106.6417, "Asia/Shanghai"],
  ["Chengdu", "ZUUU", 30.5785, 103.9471, "Asia/Shanghai"],
  ["NYC", "KLGA", 40.7769, -73.874, "America/New_York"],
  ["Warsaw", "EPWA", 52.1657, 20.9671, "Europe/Warsaw"],
  ["Jakarta", "WIHH", -6.2666, 106.8911, "Asia/Jakarta"],
  ["Munich", "EDDM", 48.3538, 11.7861, "Europe/Berlin"],
  ["Atlanta", "KATL", 33.6367, -84.4281, "America/New_York"],
  ["Amsterdam", "EHAM", 52.3105, 4.7683, "Europe/Amsterdam"],
  ["Moscow", "UUWW", 55.5915, 37.2615, "Europe/Moscow"],
  ["Toronto", "CYYZ", 43.6777, -79.6248, "America/Toronto"],
  ["Istanbul", "LTFM", 41.2753, 28.7519, "Europe/Istanbul"],
  ["Kuala Lumpur", "WMKK", 2.7456, 101.7072, "Asia/Kuala_Lumpur"],
  ["Wuhan", "ZHHH", 30.7838, 114.2081, "Asia/Shanghai"],
  ["Lagos", "DNMM", 6.5774, 3.3212, "Africa/Lagos"],
  ["Los Angeles", "KLAX", 33.9416, -118.4085, "America/Los_Angeles"],
  ["Guangzhou", "ZGGG", 23.3924, 113.2988, "Asia/Shanghai"],
  ["Lucknow", "VILK", 26.7606, 80.8893, "Asia/Kolkata"],
  ["Buenos Aires", "SAEZ", -34.8222, -58.5358, "America/Argentina/Buenos_Aires"],
  ["Busan", "RKPK", 35.1795, 128.9382, "Asia/Seoul"],
  ["Cape Town", "FACT", -33.9648, 18.6017, "Africa/Johannesburg"],
  ["Tel Aviv", "LLBG", 32.0114, 34.8867, "Asia/Jerusalem"],
  ["Manila", "RPLL", 14.5086, 121.0198, "Asia/Manila"],
  ["Qingdao", "ZSQD", 36.3619, 120.0885, "Asia/Shanghai"],
  ["San Francisco", "KSFO", 37.6213, -122.379, "America/Los_Angeles"],
  ["Denver", "KBKF", 39.7017, -104.7517, "America/Denver"],
  ["Mexico City", "MMMX", 19.4363, -99.0721, "America/Mexico_City"],
  ["Seattle", "KSEA", 47.4502, -122.3088, "America/Los_Angeles"],
  ["Wellington", "NZWN", -41.3268, 174.8069, "Pacific/Auckland"],
  ["Austin", "KAUS", 30.1945, -97.6699, "America/Chicago"],
  ["Shenzhen", "ZGSZ", 22.6395, 113.8033, "Asia/Shanghai"],
  ["Chicago", "KORD", 41.9769, -87.9081, "America/Chicago"],
  ["Helsinki", "EFHK", 60.3184, 24.9633, "Europe/Helsinki"],
  ["Jeddah", "OEJN", 21.6802, 39.1574, "Asia/Riyadh"],
  ["Houston", "KHOU", 29.6458, -95.2772, "America/Chicago"],
  ["Karachi", "OPKC", 24.9065, 67.1608, "Asia/Karachi"],
  ["Panama City", "MPMG", 8.9733, -79.5556, "America/Panama"]
].map(([name, code, lat, lon, timeZone]) => ({ name, code, lat, lon, timeZone }));

const polymarketMonthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
const formatterCache = new Map();

function getFormatter(key, options) {
  const cached = formatterCache.get(key);
  if (cached) {
    return cached;
  }

  const formatter = new Intl.DateTimeFormat("en-GB", options);
  formatterCache.set(key, formatter);
  return formatter;
}

function dateFormatter(timeZone) {
  return getFormatter(`date-${timeZone}`, {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

function zonePartsFormatter(timeZone) {
  return getFormatter(`parts-${timeZone}`, {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

function dateKey(date, timeZone) {
  const parts = Object.fromEntries(
    dateFormatter(timeZone)
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
}

function cityDateParts(city, date = new Date()) {
  const [year, month, day] = dateKey(date, city.timeZone).split("-").map(Number);
  return { year, month, day };
}

function slugPart(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function polymarketSlug(city, date = new Date()) {
  const { year, month, day } = cityDateParts(city, date);
  const monthName = polymarketMonthFormatter.format(new Date(Date.UTC(year, month - 1, 1))).toLowerCase();
  return `highest-temperature-in-${slugPart(city.name)}-on-${monthName}-${day}-${year}`;
}

function parseJsonArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value !== "string") {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function tokenId(market, side) {
  const outcomes = parseJsonArray(market.outcomes);
  const tokenIds = parseJsonArray(market.clobTokenIds);
  const index = outcomes.findIndex((outcome) => String(outcome).toLowerCase() === side);
  return index > -1 ? String(tokenIds[index] || "") : "";
}

function cleanTemperatureLabel(value) {
  return String(value ?? "")
    .replace(/\u00c2/g, "")
    .replace(/\u00b0/g, "")
    .replace(/\s+or\s+higher/i, "+")
    .replace(/\s+or\s+below/i, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function numericOutcome(market, label) {
  const threshold = Number(market.groupItemThreshold);
  if (Number.isFinite(threshold)) {
    return threshold;
  }

  const match = String(label).match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function marketYesPrice(market) {
  const livePrice = Number(market.liveYesPrice);
  if (market.liveYesPrice !== null && market.liveYesPrice !== undefined && Number.isFinite(livePrice)) {
    return livePrice;
  }

  const outcomes = parseJsonArray(market.outcomes);
  const prices = parseJsonArray(market.outcomePrices);
  const yesIndex = outcomes.findIndex((outcome) => String(outcome).toLowerCase() === "yes");
  const price = Number(prices[yesIndex]);
  return Number.isFinite(price) ? price : 0;
}

function highlightedMarkets(markets) {
  const positions = markets
    .map((market, index) => {
      const label = cleanTemperatureLabel(market.groupItemTitle);
      return {
        market,
        label,
        order: index,
        threshold: numericOutcome(market, label),
        yesPrice: marketYesPrice(market)
      };
    })
    .filter((position) => position.label);

  const topPositions = [...positions]
    .sort((a, b) => b.yesPrice - a.yesPrice || a.order - b.order)
    .slice(0, 3);
  const topPositionSet = new Set(topPositions);
  const firstTopIndex = positions.findIndex((position) => topPositionSet.has(position));
  const lowerFavorite = firstTopIndex > -1 ? positions[firstTopIndex] : null;

  return positions
    .filter((position, index) => !topPositionSet.has(position) && firstTopIndex > -1 && index < firstTopIndex)
    .filter((position) => position.yesPrice >= 0.01 && position.yesPrice <= 0.1)
    .map((position) => ({ ...position, lowerFavorite }));
}

async function addLivePrices(event) {
  const markets = Array.isArray(event?.markets) ? event.markets : [];
  const tokenByMarket = new Map();
  const tokenRequests = [];

  markets.forEach((market) => {
    const yesId = tokenId(market, "yes");
    if (yesId) {
      tokenByMarket.set(market, yesId);
      tokenRequests.push({ token_id: yesId });
    }
  });

  if (!tokenRequests.length) {
    return event;
  }

  const response = await fetch(`${POLYMARKET_CLOB_BASE_URL}/midpoints`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": USER_AGENT
    },
    body: JSON.stringify(tokenRequests)
  });

  if (!response.ok) {
    return event;
  }

  const prices = await response.json();
  markets.forEach((market) => {
    const yesId = tokenByMarket.get(market);
    const price = Number(prices[yesId]);
    if (Number.isFinite(price)) {
      market.liveYesPrice = price;
    }
  });

  return event;
}

function cityLocalIsoToDate(localIso, timeZone) {
  const [datePart, timePart] = localIso.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  const desired = Date.UTC(year, month - 1, day, hour, minute, 0);
  let guess = new Date(desired);

  for (let index = 0; index < 3; index += 1) {
    const parts = Object.fromEntries(
      zonePartsFormatter(timeZone)
        .formatToParts(guess)
        .filter((part) => part.type !== "literal")
        .map((part) => [part.type, Number(part.value)])
    );
    const actual = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour === 24 ? 0 : parts.hour,
      parts.minute,
      parts.second
    );
    const diff = desired - actual;
    if (diff === 0) {
      return guess;
    }
    guess = new Date(guess.getTime() + diff);
  }

  return guess;
}

function formatOffsetIso(localIso, instant, timeZone) {
  const parts = Object.fromEntries(
    zonePartsFormatter(timeZone)
      .formatToParts(instant)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)])
  );
  const localAsUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour === 24 ? 0 : parts.hour,
    parts.minute,
    parts.second
  );
  const offsetMinutes = Math.round((localAsUtc - instant.getTime()) / 60000);
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absolute = Math.abs(offsetMinutes);
  const hours = String(Math.floor(absolute / 60)).padStart(2, "0");
  const minutes = String(absolute % 60).padStart(2, "0");
  return `${localIso}:00${sign}${hours}:${minutes}`;
}

function findDailyPeak(hourly, city, targetDate, now = new Date()) {
  const temperatures = hourly?.temperature_2m ?? [];
  const times = hourly?.time ?? [];

  if (!temperatures.length || temperatures.length !== times.length) {
    return null;
  }

  const todayInCity = targetDate === dateKey(now, city.timeZone);
  const rows = temperatures.map((temperature, index) => ({
    temperature,
    localIso: times[index],
    instant: cityLocalIsoToDate(times[index], city.timeZone).getTime()
  }));
  const candidates = todayInCity ? rows.filter((row) => row.instant >= now.getTime()) : rows;
  const usableRows = candidates.length ? candidates : rows;
  const peak = usableRows.reduce((best, row) => (row.temperature > best.temperature ? row : best), usableRows[0]);
  const instant = new Date(peak.instant);

  return {
    temperature: peak.temperature,
    localIso: peak.localIso,
    offsetIso: formatOffsetIso(peak.localIso, instant, city.timeZone)
  };
}

function weatherUrl(city, targetDate) {
  const params = new URLSearchParams({
    latitude: city.lat,
    longitude: city.lon,
    hourly: "temperature_2m",
    temperature_unit: "celsius",
    start_date: targetDate,
    end_date: targetDate,
    timezone: city.timeZone
  });

  return `${WEATHER_API_BASE_URL}?${params.toString()}`;
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  return response.json();
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function readApiKey(request) {
  const headerKey = request.headers["x-api-key"];
  if (typeof headerKey === "string" && headerKey) {
    return headerKey;
  }

  const authorization = request.headers.authorization;
  const match = typeof authorization === "string" ? authorization.match(/^Bearer\s+(.+)$/i) : null;
  return match ? match[1] : "";
}

function authorize(request, response) {
  const configuredKey = process.env.CITY_STAT_API_KEY;
  if (!configuredKey) {
    response.status(503).json({ error: "CITY_STAT_API_KEY is not configured" });
    return false;
  }

  if (readApiKey(request) !== configuredKey) {
    response.status(401).json({ error: "Invalid API key" });
    return false;
  }

  return true;
}

async function cityCandidates(city, now) {
  const marketSlug = polymarketSlug(city, now);
  const marketDate = dateKey(now, city.timeZone);
  const event = await addLivePrices(
    await fetchJson(`${POLYMARKET_API_BASE_URL}${marketSlug}?t=${Date.now()}`, {
      headers: {
        accept: "application/json",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "user-agent": USER_AGENT
      }
    })
  );
  const greenPositions = highlightedMarkets(Array.isArray(event?.markets) ? event.markets : []);

  if (!greenPositions.length) {
    return [];
  }

  const weather = await fetchJson(weatherUrl(city, marketDate), {
    headers: { accept: "application/json", "user-agent": USER_AGENT }
  });
  const peak = findDailyPeak(weather.hourly, city, marketDate, now);
  const updatedAt = new Date().toISOString();

  return greenPositions.map((position) => ({
    market_slug: marketSlug,
    city: city.name,
    timezone: city.timeZone,
    market_date: marketDate,
    station_icao: city.code,
    outcome_c: position.threshold,
    yes_price: position.yesPrice,
    no_token_id: tokenId(position.market, "no"),
    lower_favorite_c: position.lowerFavorite?.threshold ?? null,
    peak_temp_time: peak?.offsetIso ?? null,
    updated_at: updatedAt
  }));
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!authorize(request, response)) {
    return;
  }

  try {
    const now = new Date();
    const cityResults = await mapLimit(cities, 6, async (city) => {
      try {
        return await cityCandidates(city, now);
      } catch (error) {
        return [];
      }
    });
    const updatedAt = new Date().toISOString();

    response.setHeader("Cache-Control", "no-store, no-cache, max-age=0, must-revalidate");
    response.status(200).json({
      updated_at: updatedAt,
      candidates: cityResults.flat()
    });
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
}
