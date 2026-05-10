const USER_TIME_ZONE = "Asia/Yekaterinburg";
const WEATHER_REFRESH_MS = 60 * 1000;
const POLYMARKET_REFRESH_MS = 15 * 1000;
const POLYMARKET_BASE_URL = "https://polymarket.com/event/";
const POLYMARKET_API_BASE_URL =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "/api/polymarket/"
    : "https://gamma-api.polymarket.com/events/slug/";

const cities = [
  {
    name: "London",
    code: "EGLC",
    lat: 51.5053,
    lon: 0.0553,
    timeZone: "Europe/London",
    unit: "celsius"
  },
  {
    name: "Paris",
    code: "LFPB",
    lat: 48.9694,
    lon: 2.4414,
    timeZone: "Europe/Paris",
    unit: "celsius"
  },
  {
    name: "Beijing",
    code: "ZBAA",
    lat: 40.0774,
    lon: 116.5967,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Dallas",
    code: "KDAL",
    lat: 32.8459,
    lon: -96.8509,
    timeZone: "America/Chicago",
    unit: "fahrenheit"
  },
  {
    name: "Taipei",
    code: "RCSS",
    lat: 25.0697,
    lon: 121.5525,
    timeZone: "Asia/Taipei",
    unit: "celsius"
  },
  {
    name: "Seoul",
    code: "RKSI",
    lat: 37.4602,
    lon: 126.4407,
    timeZone: "Asia/Seoul",
    unit: "celsius"
  },
  {
    name: "Hong Kong",
    code: "VHHH",
    lat: 22.308,
    lon: 113.9185,
    timeZone: "Asia/Hong_Kong",
    unit: "celsius"
  },
  {
    name: "Singapore",
    code: "WSSS",
    lat: 1.3644,
    lon: 103.9915,
    timeZone: "Asia/Singapore",
    unit: "celsius"
  },
  {
    name: "Milan",
    code: "LIMC",
    lat: 45.6306,
    lon: 8.7281,
    timeZone: "Europe/Rome",
    unit: "celsius"
  },
  {
    name: "Madrid",
    code: "LEMD",
    lat: 40.4983,
    lon: -3.5676,
    timeZone: "Europe/Madrid",
    unit: "celsius"
  },
  {
    name: "Shanghai",
    code: "ZSPD",
    lat: 31.1434,
    lon: 121.8052,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Miami",
    code: "KMIA",
    lat: 25.7959,
    lon: -80.287,
    timeZone: "America/New_York",
    unit: "fahrenheit"
  },
  {
    name: "Ankara",
    code: "LTAC",
    lat: 40.1281,
    lon: 32.9951,
    timeZone: "Europe/Istanbul",
    unit: "celsius"
  },
  {
    name: "Sao Paulo",
    code: "SBGR",
    lat: -23.4356,
    lon: -46.4731,
    timeZone: "America/Sao_Paulo",
    unit: "celsius"
  },
  {
    name: "Chongqing",
    code: "ZUCK",
    lat: 29.7192,
    lon: 106.6417,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Chengdu",
    code: "ZUUU",
    lat: 30.5785,
    lon: 103.9471,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "NYC",
    code: "KLGA",
    lat: 40.7769,
    lon: -73.874,
    timeZone: "America/New_York",
    unit: "fahrenheit"
  },
  {
    name: "Warsaw",
    code: "EPWA",
    lat: 52.1657,
    lon: 20.9671,
    timeZone: "Europe/Warsaw",
    unit: "celsius"
  },
  {
    name: "Jakarta",
    code: "WIHH",
    lat: -6.2666,
    lon: 106.8911,
    timeZone: "Asia/Jakarta",
    unit: "celsius"
  },
  {
    name: "Munich",
    code: "EDDM",
    lat: 48.3538,
    lon: 11.7861,
    timeZone: "Europe/Berlin",
    unit: "celsius"
  },
  {
    name: "Atlanta",
    code: "KATL",
    lat: 33.6367,
    lon: -84.4281,
    timeZone: "America/New_York",
    unit: "fahrenheit"
  },
  {
    name: "Amsterdam",
    code: "EHAM",
    lat: 52.3105,
    lon: 4.7683,
    timeZone: "Europe/Amsterdam",
    unit: "celsius"
  },
  {
    name: "Moscow",
    code: "UUWW",
    lat: 55.5915,
    lon: 37.2615,
    timeZone: "Europe/Moscow",
    unit: "celsius"
  },
  {
    name: "Toronto",
    code: "CYYZ",
    lat: 43.6777,
    lon: -79.6248,
    timeZone: "America/Toronto",
    unit: "celsius"
  },
  {
    name: "Istanbul",
    code: "LTFM",
    lat: 41.2753,
    lon: 28.7519,
    timeZone: "Europe/Istanbul",
    unit: "celsius"
  },
  {
    name: "Kuala Lumpur",
    code: "WMKK",
    lat: 2.7456,
    lon: 101.7072,
    timeZone: "Asia/Kuala_Lumpur",
    unit: "celsius"
  },
  {
    name: "Wuhan",
    code: "ZHHH",
    lat: 30.7838,
    lon: 114.2081,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Lagos",
    code: "DNMM",
    lat: 6.5774,
    lon: 3.3212,
    timeZone: "Africa/Lagos",
    unit: "celsius"
  },
  {
    name: "Los Angeles",
    code: "KLAX",
    lat: 33.9416,
    lon: -118.4085,
    timeZone: "America/Los_Angeles",
    unit: "fahrenheit"
  },
  {
    name: "Guangzhou",
    code: "ZGGG",
    lat: 23.3924,
    lon: 113.2988,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Lucknow",
    code: "VILK",
    lat: 26.7606,
    lon: 80.8893,
    timeZone: "Asia/Kolkata",
    unit: "celsius"
  },
  {
    name: "Buenos Aires",
    code: "SAEZ",
    lat: -34.8222,
    lon: -58.5358,
    timeZone: "America/Argentina/Buenos_Aires",
    unit: "celsius"
  },
  {
    name: "Busan",
    code: "RKPK",
    lat: 35.1795,
    lon: 128.9382,
    timeZone: "Asia/Seoul",
    unit: "celsius"
  },
  {
    name: "Cape Town",
    code: "FACT",
    lat: -33.9648,
    lon: 18.6017,
    timeZone: "Africa/Johannesburg",
    unit: "celsius"
  },
  {
    name: "Tel Aviv",
    code: "LLBG",
    lat: 32.0114,
    lon: 34.8867,
    timeZone: "Asia/Jerusalem",
    unit: "celsius"
  },
  {
    name: "Manila",
    code: "RPLL",
    lat: 14.5086,
    lon: 121.0198,
    timeZone: "Asia/Manila",
    unit: "celsius"
  },
  {
    name: "Qingdao",
    code: "ZSQD",
    lat: 36.3619,
    lon: 120.0885,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "San Francisco",
    code: "KSFO",
    lat: 37.6213,
    lon: -122.379,
    timeZone: "America/Los_Angeles",
    unit: "fahrenheit"
  },
  {
    name: "Denver",
    code: "KBKF",
    lat: 39.7017,
    lon: -104.7517,
    timeZone: "America/Denver",
    unit: "fahrenheit"
  },
  {
    name: "Mexico City",
    code: "MMMX",
    lat: 19.4363,
    lon: -99.0721,
    timeZone: "America/Mexico_City",
    unit: "celsius"
  },
  {
    name: "Seattle",
    code: "KSEA",
    lat: 47.4502,
    lon: -122.3088,
    timeZone: "America/Los_Angeles",
    unit: "fahrenheit"
  }
];

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

const clockFormatter = (timeZone) =>
  getFormatter(`clock-${timeZone}`, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

const dateTimeFormatter = (timeZone) =>
  getFormatter(`date-time-${timeZone}`, {
    timeZone,
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

const dateFormatter = (timeZone) =>
  getFormatter(`date-${timeZone}`, {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

const zonePartsFormatter = (timeZone) =>
  getFormatter(`parts-${timeZone}`, {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

const tempFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1
});
const polymarketMonthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long"
});

const template = document.querySelector("#cityCardTemplate");
const cards = document.querySelector("#cards");
const userClock = document.querySelector("#userClock");
const sortButton = document.querySelector("#sortButton");
const dimButton = document.querySelector("#dimButton");
const hideClosedButton = document.querySelector("#hideClosedButton");
const renderedCards = new Map();
let sortByPeak = false;
let dimPastPeaks = false;
let hideClosedMarkets = false;

function formatClock(date, timeZone) {
  return clockFormatter(timeZone).format(date);
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

function fahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function cityDate(city) {
  return dateKey(new Date(), city.timeZone);
}

function cityDateParts(city, date = new Date()) {
  const parts = Object.fromEntries(
    dateFormatter(city.timeZone)
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return {
    year: parts.year,
    month: Number(parts.month),
    day: Number(parts.day)
  };
}

function slugPart(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function polymarketUrl(city, date = new Date()) {
  return `${POLYMARKET_BASE_URL}${polymarketSlug(city, date)}`;
}

function polymarketSlug(city, date = new Date()) {
  const { year, month, day } = cityDateParts(city, date);
  const monthName = polymarketMonthFormatter.format(new Date(Date.UTC(Number(year), month - 1, 1))).toLowerCase();

  return `highest-temperature-in-${slugPart(city.name)}-on-${monthName}-${day}-${year}`;
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

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function buildCards() {
  const fragment = document.createDocumentFragment();

  cities.forEach((city) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const link = node.querySelector(".card-link");
    node.querySelector("h2").textContent = city.name;
    link.href = polymarketUrl(city);
    link.title = `Open today's ${city.name} market on Polymarket`;
    renderedCards.set(city.code, { city, node, polymarketSlug: polymarketSlug(city) });
    fragment.append(node);
  });

  cards.append(fragment);
}

function renderCardOrder() {
  const entries = Array.from(renderedCards.values());
  const ordered = sortByPeak
    ? entries.sort((a, b) => {
        const aPeak = a.peakTime ?? Number.POSITIVE_INFINITY;
        const bPeak = b.peakTime ?? Number.POSITIVE_INFINITY;
        return aPeak - bPeak;
      })
    : entries.sort((a, b) => cities.indexOf(a.city) - cities.indexOf(b.city));

  ordered.forEach(({ node }) => cards.append(node));
}

function updateClosedVisibility() {
  renderedCards.forEach(({ node, isClosed }) => {
    node.classList.toggle("is-hidden", hideClosedMarkets && isClosed);
  });
}

function updateDimming() {
  const now = Date.now();
  const today = dateKey(new Date(now), USER_TIME_ZONE);
  const tomorrowDate = new Date(now + 24 * 60 * 60 * 1000);
  const tomorrow = dateKey(tomorrowDate, USER_TIME_ZONE);

  renderedCards.forEach(({ node, peakTime }) => {
    const shouldDim = dimPastPeaks && Number.isFinite(peakTime) && peakTime < now;
    const shouldHighlightTomorrow =
      dimPastPeaks && Number.isFinite(peakTime) && peakTime >= now && dateKey(new Date(peakTime), USER_TIME_ZONE) === tomorrow;
    node.classList.toggle("is-dimmed", shouldDim);
    node.classList.toggle("is-tomorrow", shouldHighlightTomorrow && today !== tomorrow);
  });
  updateClosedVisibility();
}

function updateClocks() {
  const now = new Date();
  userClock.textContent = formatClock(now, USER_TIME_ZONE);

  renderedCards.forEach((cardState) => {
    const { city, node } = cardState;
    node.querySelector(".city-time").textContent = formatClock(now, city.timeZone);
    const link = node.querySelector(".card-link");
    const currentSlug = polymarketSlug(city, now);
    const currentUrl = `${POLYMARKET_BASE_URL}${currentSlug}`;
    if (link.href !== currentUrl) {
      link.href = currentUrl;
      cardState.polymarketSlug = currentSlug;
      loadPolymarket(city, node, currentSlug);
    }
  });
  updateDimming();
}

function findDailyPeak(hourly) {
  const temperatures = hourly?.temperature_2m ?? [];
  const times = hourly?.time ?? [];

  if (!temperatures.length || temperatures.length !== times.length) {
    throw new Error("Open-Meteo returned no hourly temperatures for the target date.");
  }

  const maxTemp = Math.max(...temperatures);
  const index = temperatures.findIndex((temperature) => temperature === maxTemp);

  return {
    temperature: maxTemp,
    localIso: times[index]
  };
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

async function loadWeather(city, node) {
  const dot = node.querySelector(".status-dot");
  const targetDate = cityDate(city);

  dot.className = "status-dot";
  const cardState = renderedCards.get(city.code);
  if (cardState) {
    cardState.peakTime = Number.POSITIVE_INFINITY;
  }
  node.querySelector(".max-temp").textContent = "Loading";
  node.querySelector(".forecast-date").textContent = targetDate;
  node.querySelector(".local-peak").textContent = "--";
  node.querySelector(".user-peak").textContent = "--";

  try {
    const response = await fetch(weatherUrl(city, targetDate));
    if (!response.ok) {
      throw new Error(`Open-Meteo responded with ${response.status}`);
    }

    const data = await response.json();
    const peak = findDailyPeak(data.hourly);
    const peakDate = cityLocalIsoToDate(peak.localIso, city.timeZone);
    const celsius = tempFormatter.format(peak.temperature);
    const displayTemp =
      city.unit === "fahrenheit"
        ? `${tempFormatter.format(fahrenheit(peak.temperature))} F`
        : `${celsius} C`;

    node.querySelector(".max-temp").textContent = displayTemp;
    node.querySelector(".local-peak").textContent = dateTimeFormatter(city.timeZone).format(peakDate);
    node.querySelector(".user-peak").textContent = dateTimeFormatter(USER_TIME_ZONE).format(peakDate);
    if (cardState) {
      cardState.peakTime = peakDate.getTime();
    }
    dot.classList.add("ready");
    dot.title = "Weather loaded";
    renderCardOrder();
  } catch (error) {
    const cardState = renderedCards.get(city.code);
    if (cardState) {
      cardState.peakTime = Number.POSITIVE_INFINITY;
    }
    node.querySelector(".max-temp").textContent = "Unavailable";
    dot.classList.add("error");
    dot.title = error.message;
    renderCardOrder();
  }
}

function loadAllWeather() {
  renderedCards.forEach(({ city, node }) => {
    loadWeather(city, node);
  });
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

function cleanTemperatureLabel(value) {
  return String(value ?? "")
    .replace(/\u00c2/g, "")
    .replace(/\u00b0/g, "")
    .replace(/\s+or\s+higher/i, "+")
    .replace(/\s+or\s+below/i, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPercent(percent) {
  return `${percent.toFixed(1)}%`;
}

function marketYesPercent(market) {
  const outcomes = parseJsonArray(market.outcomes);
  const prices = parseJsonArray(market.outcomePrices);
  const yesIndex = outcomes.findIndex((outcome) => String(outcome).toLowerCase() === "yes");
  const price = Number(prices[yesIndex]);

  return Number.isFinite(price) ? price * 100 : 0;
}

function marketOrder(market) {
  const threshold = Number(market.groupItemThreshold);
  return Number.isFinite(threshold) ? threshold : Number.POSITIVE_INFINITY;
}

function getHighlightedPositions(markets) {
  const positions = markets
    .map((market, index) => ({
      label: cleanTemperatureLabel(market.groupItemTitle),
      order: index,
      threshold: marketOrder(market),
      percent: marketYesPercent(market),
      tone: ""
    }))
    .filter((position) => position.label);

  const topPositions = [...positions]
    .sort((a, b) => b.percent - a.percent || a.order - b.order)
    .slice(0, 3);
  const topPositionSet = new Set(topPositions);
  const firstTopIndex = positions.findIndex((position) => topPositionSet.has(position));

  positions.forEach((position, index) => {
    if (topPositionSet.has(position)) {
      position.tone = "top";
    } else if (firstTopIndex > -1 && index < firstTopIndex && position.percent >= 1 && position.percent <= 7) {
      position.tone = "near";
    }
  });

  return {
    isClosed: positions.some((position) => position.percent >= 95),
    positions: positions.filter((position) => position.tone).sort((a, b) => a.order - b.order)
  };
}

function renderPolymarketPositions(node, result) {
  const list = node.querySelector(".position-list");
  const positions = result.positions;

  if (!positions.length) {
    list.textContent = "No tracked positions";
    return;
  }

  list.replaceChildren(
    ...positions.map((position) => {
      const item = document.createElement("span");
      item.className = `position-item is-${position.tone}`;
      item.textContent = `${position.label} — ${formatPercent(position.percent)}`;
      return item;
    })
  );
}

async function loadPolymarket(city, node, slug = polymarketSlug(city)) {
  const list = node.querySelector(".position-list");
  if (!list.children.length && list.textContent !== "Unavailable") {
    list.textContent = "Loading";
  }

  try {
    const response = await fetch(`${POLYMARKET_API_BASE_URL}${slug}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Polymarket responded with ${response.status}`);
    }

    const event = await response.json();
    const result = getHighlightedPositions(event.markets ?? []);
    const cardState = renderedCards.get(city.code);
    if (cardState) {
      cardState.isClosed = result.isClosed;
    }
    node.classList.toggle("is-closed", result.isClosed);
    renderPolymarketPositions(node, result);
    updateClosedVisibility();
  } catch (error) {
    list.textContent = "Unavailable";
    list.title = error.message;
  }
}

function loadAllPolymarkets() {
  renderedCards.forEach((cardState) => {
    const slug = polymarketSlug(cardState.city);
    cardState.polymarketSlug = slug;
    loadPolymarket(cardState.city, cardState.node, slug);
  });
}

buildCards();
sortButton.addEventListener("click", () => {
  sortByPeak = !sortByPeak;
  sortButton.setAttribute("aria-pressed", String(sortByPeak));
  renderCardOrder();
});
dimButton.addEventListener("click", () => {
  dimPastPeaks = !dimPastPeaks;
  dimButton.setAttribute("aria-pressed", String(dimPastPeaks));
  updateDimming();
});
hideClosedButton.addEventListener("click", () => {
  hideClosedMarkets = !hideClosedMarkets;
  hideClosedButton.setAttribute("aria-pressed", String(hideClosedMarkets));
  updateClosedVisibility();
});
updateClocks();
setInterval(updateClocks, 1000);
loadAllWeather();
setInterval(loadAllWeather, WEATHER_REFRESH_MS);
loadAllPolymarkets();
setInterval(loadAllPolymarkets, POLYMARKET_REFRESH_MS);
