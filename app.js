const USER_TIME_ZONE = "Asia/Yekaterinburg";
const WEATHER_REFRESH_MS = 10 * 60 * 1000;
const POLYMARKET_REFRESH_MS = 5 * 1000;
const WEATHER_CACHE_PREFIX = "city-stat:weather:v2:";
const POLYMARKET_CACHE_PREFIX = "city-stat:polymarket:v2:";
const POLYMARKET_BASE_URL = "https://polymarket.com/event/";
const POLYMARKET_API_BASE_URL = "/api/polymarket/";
const FAVORITES_STORAGE_KEY = "city-stat:favorites:v1";
const GREEN_THRESHOLD_STORAGE_KEY = "city-stat:green-threshold:v2";
const MIN_GREEN_PERCENT = 1;
const DEFAULT_GREEN_PERCENT = 10;

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
  },
  {
    name: "Wellington",
    code: "NZWN",
    lat: -41.3268,
    lon: 174.8069,
    timeZone: "Pacific/Auckland",
    unit: "celsius"
  },
  {
    name: "Austin",
    code: "KAUS",
    lat: 30.1945,
    lon: -97.6699,
    timeZone: "America/Chicago",
    unit: "fahrenheit"
  },
  {
    name: "Shenzhen",
    code: "ZGSZ",
    lat: 22.6395,
    lon: 113.8033,
    timeZone: "Asia/Shanghai",
    unit: "celsius"
  },
  {
    name: "Chicago",
    code: "KORD",
    lat: 41.9769,
    lon: -87.9081,
    timeZone: "America/Chicago",
    unit: "fahrenheit"
  },
  {
    name: "Helsinki",
    code: "EFHK",
    lat: 60.3184,
    lon: 24.9633,
    timeZone: "Europe/Helsinki",
    unit: "celsius"
  },
  {
    name: "Jeddah",
    code: "OEJN",
    lat: 21.6802,
    lon: 39.1574,
    timeZone: "Asia/Riyadh",
    unit: "celsius"
  },
  {
    name: "Houston",
    code: "KHOU",
    lat: 29.6458,
    lon: -95.2772,
    timeZone: "America/Chicago",
    unit: "fahrenheit"
  },
  {
    name: "Karachi",
    code: "OPKC",
    lat: 24.9065,
    lon: 67.1608,
    timeZone: "Asia/Karachi",
    unit: "celsius"
  },
  {
    name: "Panama City",
    code: "MPMG",
    lat: 8.9733,
    lon: -79.5556,
    timeZone: "America/Panama",
    unit: "celsius"
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
const todayTab = document.querySelector("#todayTab");
const tomorrowTab = document.querySelector("#tomorrowTab");
const sortButton = document.querySelector("#sortButton");
const dimButton = document.querySelector("#dimButton");
const hideClosedButton = document.querySelector("#hideClosedButton");
const greenOnlyButton = document.querySelector("#greenOnlyButton");
const favoritesOnlyButton = document.querySelector("#favoritesOnlyButton");
const greenThresholdInput = document.querySelector("#greenThresholdInput");
const renderedCards = new Map();
let sortByPeak = false;
let dimPastPeaks = false;
let hideClosedMarkets = false;
let showOnlyGreen = false;
let showOnlyFavorites = false;
let selectedDayOffset = 0;
let greenSelectionThreshold = readGreenSelectionThreshold();
const favoriteCities = readFavoriteCities();

function readFavoriteCities() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) {
      return new Set();
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed.filter((value) => typeof value === "string")) : new Set();
  } catch {
    return new Set();
  }
}

function writeFavoriteCities() {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(favoriteCities)));
  } catch {
    // Favorite persistence failures should not block interactions.
  }
}

function readGreenSelectionThreshold() {
  try {
    const raw = localStorage.getItem(GREEN_THRESHOLD_STORAGE_KEY);
    const value = Number(raw);
    if (Number.isFinite(value) && value >= MIN_GREEN_PERCENT && value <= 100) {
      return value;
    }
  } catch {
    // Ignore bad local storage values and fall back to the default threshold.
  }

  return DEFAULT_GREEN_PERCENT;
}

function writeGreenSelectionThreshold() {
  try {
    localStorage.setItem(GREEN_THRESHOLD_STORAGE_KEY, String(greenSelectionThreshold));
  } catch {
    // Threshold persistence failures should not block interactions.
  }
}

function formatClock(date, timeZone) {
  return clockFormatter(timeZone).format(date);
}

function addDays(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

function getSelectedMarketDate(baseDate = new Date()) {
  return addDays(baseDate, selectedDayOffset);
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

function cityDate(city, date = getSelectedMarketDate()) {
  return dateKey(date, city.timeZone);
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
    const favoriteButton = node.querySelector(".favorite-button");
    node.querySelector("h2").textContent = city.name;
    link.href = polymarketUrl(city, getSelectedMarketDate());
    link.title = `Open ${selectedDayOffset === 0 ? "today's" : "tomorrow's"} ${city.name} market on Polymarket`;
    favoriteButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(city.code);
    });
    renderedCards.set(city.code, {
      city,
      node,
      polymarketSlug: polymarketSlug(city, getSelectedMarketDate()),
      isFavorite: favoriteCities.has(city.code),
      marketPositions: [],
      hasGreenPositions: false
    });
    renderFavoriteState(city.code);
    fragment.append(node);
  });

  cards.append(fragment);
}

function renderFavoriteState(cityCode) {
  const cardState = renderedCards.get(cityCode);
  if (!cardState) {
    return;
  }

  const button = cardState.node.querySelector(".favorite-button");
  const pressed = cardState.isFavorite;
  button.setAttribute("aria-pressed", String(pressed));
  button.setAttribute("aria-label", pressed ? "Remove from favorites" : "Add to favorites");
  button.title = pressed ? "Remove from favorites" : "Add to favorites";
  button.textContent = pressed ? "★" : "☆";
}

function toggleFavorite(cityCode) {
  const cardState = renderedCards.get(cityCode);
  if (!cardState) {
    return;
  }

  cardState.isFavorite = !cardState.isFavorite;
  if (cardState.isFavorite) {
    favoriteCities.add(cityCode);
  } else {
    favoriteCities.delete(cityCode);
  }

  writeFavoriteCities();
  renderFavoriteState(cityCode);
  updateCardVisibility();
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

function updateCardVisibility() {
  renderedCards.forEach(({ node, isClosed, hasGreenPositions, isFavorite }) => {
    const isHidden =
      (hideClosedMarkets && isClosed) ||
      (showOnlyGreen && !hasGreenPositions) ||
      (showOnlyFavorites && !isFavorite);
    node.classList.toggle("is-hidden", isHidden);
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
  updateCardVisibility();
}

function updateClocks() {
  const now = new Date();
  const selectedDate = getSelectedMarketDate(now);
  userClock.textContent = formatClock(now, USER_TIME_ZONE);

  renderedCards.forEach((cardState) => {
    const { city, node } = cardState;
    node.querySelector(".city-time").textContent = formatClock(now, city.timeZone);
    const link = node.querySelector(".card-link");
    const currentSlug = polymarketSlug(city, selectedDate);
    const currentUrl = `${POLYMARKET_BASE_URL}${currentSlug}`;
    if (link.href !== currentUrl) {
      link.href = currentUrl;
      link.title = `Open ${selectedDayOffset === 0 ? "today's" : "tomorrow's"} ${city.name} market on Polymarket`;
      cardState.polymarketSlug = currentSlug;
      loadPolymarket(city, node, currentSlug);
    }
  });
  updateDimming();
}

function findDailyPeak(hourly, city, targetDate, now = new Date()) {
  const temperatures = hourly?.temperature_2m ?? [];
  const times = hourly?.time ?? [];

  if (!temperatures.length || temperatures.length !== times.length) {
    throw new Error("Open-Meteo returned no hourly temperatures for the target date.");
  }

  const todayInCity = targetDate === cityDate(city);
  const rows = temperatures.map((temperature, index) => ({
    temperature,
    localIso: times[index],
    instant: cityLocalIsoToDate(times[index], city.timeZone).getTime(),
    order: index
  }));
  const candidates = todayInCity ? rows.filter((row) => row.instant >= now.getTime()) : rows;
  const usableRows = candidates.length ? candidates : rows;
  const peak = usableRows.reduce((best, row) => {
    if (row.temperature > best.temperature) {
      return row;
    }
    return best;
  }, usableRows[0]);

  return {
    temperature: peak.temperature,
    localIso: peak.localIso
  };
}

function weatherCacheKey(city, targetDate) {
  return `${WEATHER_CACHE_PREFIX}${city.code}:${targetDate}`;
}

function readWeatherCache(city, targetDate) {
  try {
    const raw = localStorage.getItem(weatherCacheKey(city, targetDate));
    if (!raw) {
      return null;
    }

    const cached = JSON.parse(raw);
    if (
      typeof cached !== "object" ||
      cached === null ||
      typeof cached.localIso !== "string" ||
      !Number.isFinite(cached.temperature) ||
      !Number.isFinite(cached.savedAt)
    ) {
      return null;
    }

    return cached;
  } catch {
    return null;
  }
}

function writeWeatherCache(city, targetDate, peak) {
  const cached = {
    localIso: peak.localIso,
    temperature: peak.temperature,
    savedAt: Date.now()
  };

  try {
    localStorage.setItem(weatherCacheKey(city, targetDate), JSON.stringify(cached));
  } catch {
    // Cache failures should not block live weather rendering.
  }

  return cached;
}

function isWeatherCacheFresh(cached) {
  return cached && Date.now() - cached.savedAt < WEATHER_REFRESH_MS;
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
  const cardState = renderedCards.get(city.code);
  const cached = readWeatherCache(city, targetDate);

  if (cached) {
    renderWeather(city, node, cached, "cached");
  } else {
    dot.className = "status-dot";
    if (cardState) {
      cardState.peakTime = Number.POSITIVE_INFINITY;
    }
    node.querySelector(".max-temp").textContent = "Loading";
    node.querySelector(".forecast-date").textContent = targetDate;
    node.querySelector(".local-peak").textContent = "--";
    node.querySelector(".user-peak").textContent = "--";
  }

  if (isWeatherCacheFresh(cached) || cardState?.weatherLoading) {
    return;
  }

  if (cardState) {
    cardState.weatherLoading = true;
  }

  try {
    const response = await fetch(weatherUrl(city, targetDate));
    if (!response.ok) {
      throw new Error(`Open-Meteo responded with ${response.status}`);
    }

    const data = await response.json();
    const peak = findDailyPeak(data.hourly, city, targetDate);
    const fresh = writeWeatherCache(city, targetDate, peak);
    renderWeather(city, node, fresh, "fresh");
    renderCardOrder();
  } catch (error) {
    const fallback = readWeatherCache(city, targetDate);
    if (fallback) {
      renderWeather(city, node, fallback, "stale", error.message);
    } else if (cardState) {
      cardState.peakTime = Number.POSITIVE_INFINITY;
      node.querySelector(".max-temp").textContent = "Unavailable";
      dot.className = "status-dot error";
      dot.title = error.message;
    }
    renderCardOrder();
  } finally {
    if (cardState) {
      cardState.weatherLoading = false;
    }
  }
}

function renderWeather(city, node, cached, mode, message = "") {
  const peakDate = cityLocalIsoToDate(cached.localIso, city.timeZone);
  const celsius = tempFormatter.format(cached.temperature);
  const displayTemp =
    city.unit === "fahrenheit"
      ? `${tempFormatter.format(fahrenheit(cached.temperature))} F`
      : `${celsius} C`;
  const cardState = renderedCards.get(city.code);
  const dot = node.querySelector(".status-dot");

  node.querySelector(".max-temp").textContent = displayTemp;
  node.querySelector(".forecast-date").textContent = cityDate(city);
  node.querySelector(".local-peak").textContent = dateTimeFormatter(city.timeZone).format(peakDate);
  node.querySelector(".user-peak").textContent = dateTimeFormatter(USER_TIME_ZONE).format(peakDate);
  if (cardState) {
    cardState.peakTime = peakDate.getTime();
  }

  dot.className = mode === "stale" ? "status-dot stale" : "status-dot ready";
  dot.title =
    mode === "stale"
      ? `Showing archived weather. Latest request failed: ${message}`
      : mode === "cached"
        ? "Weather loaded from archive"
        : "Weather loaded";
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

function polymarketCacheKey(city, slug) {
  return `${POLYMARKET_CACHE_PREFIX}${city.code}:${slug}`;
}

function isValidPolymarketPosition(position) {
  return (
    typeof position === "object" &&
    position !== null &&
    typeof position.label === "string" &&
    Number.isFinite(position.order) &&
    Number.isFinite(position.percent) &&
    (position.threshold === null || Number.isFinite(position.threshold))
  );
}

function readPolymarketCache(city, slug) {
  try {
    const raw = localStorage.getItem(polymarketCacheKey(city, slug));
    if (!raw) {
      return null;
    }

    const cached = JSON.parse(raw);
    if (
      typeof cached !== "object" ||
      cached === null ||
      typeof cached.isClosed !== "boolean" ||
      !Array.isArray(cached.positions) ||
      !cached.positions.every(isValidPolymarketPosition) ||
      !Number.isFinite(cached.savedAt)
    ) {
      return null;
    }

    return cached;
  } catch {
    return null;
  }
}

function writePolymarketCache(city, slug, result) {
  const cached = {
    isClosed: result.isClosed,
    positions: result.positions.map((position) => ({
      label: position.label,
      order: position.order,
      percent: position.percent,
      threshold: position.threshold
    })),
    savedAt: Date.now()
  };

  try {
    localStorage.setItem(polymarketCacheKey(city, slug), JSON.stringify(cached));
  } catch {
    // Cache failures should not block live Polymarket rendering.
  }

  return cached;
}

function removePolymarketCache(city, slug) {
  try {
    localStorage.removeItem(polymarketCacheKey(city, slug));
  } catch {
    // Cache cleanup failures should not block missing-market rendering.
  }
}

function marketYesPercent(market) {
  const livePrice = Number(market.liveYesPrice);
  if (market.liveYesPrice !== null && market.liveYesPrice !== undefined && Number.isFinite(livePrice)) {
    return livePrice * 100;
  }

  const outcomes = parseJsonArray(market.outcomes);
  const prices = parseJsonArray(market.outcomePrices);
  const yesIndex = outcomes.findIndex((outcome) => String(outcome).toLowerCase() === "yes");
  const price = Number(prices[yesIndex]);

  return Number.isFinite(price) ? price * 100 : 0;
}

function marketThreshold(market, label) {
  const threshold = Number(market.groupItemThreshold);
  if (Number.isFinite(threshold)) {
    return threshold;
  }

  const match = String(label).match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function getMarketPositions(markets) {
  return markets
    .map((market, index) => {
      const label = cleanTemperatureLabel(market.groupItemTitle);
      return {
        label,
        order: index,
        threshold: marketThreshold(market, label),
        percent: marketYesPercent(market)
      };
    })
    .filter((position) => position.label);
}

function getHighlightedPositions(positions, maxGreenPercent = greenSelectionThreshold) {
  const topPositions = [...positions]
    .sort((a, b) => b.percent - a.percent || a.order - b.order)
    .slice(0, 3);
  const topPositionSet = new Set(topPositions);
  const lastTopOrder = topPositions.length ? Math.max(...topPositions.map((position) => position.order)) : -1;
  const lowestTopPosition =
    topPositions.length > 0 ? topPositions.reduce((lowest, position) => (position.order < lowest.order ? position : lowest)) : null;
  const highlighted = [];

  positions.forEach((position) => {
    const isGreenBand = position.percent >= MIN_GREEN_PERCENT && position.percent <= maxGreenPercent;

    if (topPositionSet.has(position)) {
      highlighted.push({
        ...position,
        tone: isGreenBand && lowestTopPosition === position ? "near" : "top"
      });
    } else if (position.order < lastTopOrder && isGreenBand) {
      highlighted.push({ ...position, tone: "near" });
    }
  });

  return {
    isClosed: positions.some((position) => position.percent >= 95),
    hasGreenPositions: highlighted.some((position) => position.tone === "near"),
    positions: highlighted.sort((a, b) => a.order - b.order),
    remainingPercent: Math.max(0, 100 - topPositions.reduce((sum, position) => sum + position.percent, 0)),
    topPositionOrders: new Set(topPositions.map((position) => position.order))
  };
}

function renderPolymarketUnavailable(node, mode, message = "") {
  const section = node.querySelector(".market-positions");
  const list = node.querySelector(".position-list");

  section.classList.remove("is-stale");
  section.classList.toggle("is-missing", mode === "missing");
  section.title =
    mode === "missing"
      ? "No Polymarket market page is available for this city today"
      : message;
  list.textContent = mode === "missing" ? "No market today" : "Unavailable";
  list.title = section.title;
}

function renderPolymarketPositions(node, result, mode = "fresh", message = "") {
  const section = node.querySelector(".market-positions");
  const list = node.querySelector(".position-list");
  const positions = result.positions;

  section.classList.toggle("is-stale", mode === "stale");
  section.classList.remove("is-missing");
  section.title =
    mode === "stale"
      ? `Showing archived Polymarket prices. Latest request failed: ${message}`
      : mode === "cached"
        ? "Polymarket prices loaded from archive"
        : "Polymarket prices loaded";

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

function renderPolymarketPositionsWithRemaining(node, result, mode = "fresh", message = "") {
  const section = node.querySelector(".market-positions");
  const list = node.querySelector(".position-list");
  const positions = result.positions;

  section.classList.toggle("is-stale", mode === "stale");
  section.classList.remove("is-missing");
  section.title =
    mode === "stale"
      ? `Showing archived Polymarket prices. Latest request failed: ${message}`
      : mode === "cached"
        ? "Polymarket prices loaded from archive"
        : "Polymarket prices loaded";

  if (!positions.length) {
    list.textContent = "No tracked positions";
    return;
  }

  let renderedTopCount = 0;
  const items = positions.flatMap((position) => {
    const item = document.createElement("span");
    item.className = `position-item is-${position.tone}`;
    item.textContent = `${position.label} - ${formatPercent(position.percent)}`;
    const nodes = [item];

    if (result.topPositionOrders.has(position.order)) {
      renderedTopCount += 1;
      if (renderedTopCount === 3) {
        const remaining = document.createElement("span");
        remaining.className = "position-item is-remaining";
        remaining.textContent = formatPercent(result.remainingPercent);
        nodes.push(remaining);
      }
    }

    return nodes;
  });

  list.replaceChildren(...items);
}

function refreshPolymarketCard(cityCode, mode = "fresh", message = "") {
  const cardState = renderedCards.get(cityCode);
  if (!cardState) {
    return;
  }

  const result = getHighlightedPositions(cardState.marketPositions ?? []);
  cardState.hasGreenPositions = result.hasGreenPositions;
  cardState.isClosed = result.isClosed;
  cardState.node.classList.toggle("is-closed", result.isClosed);
  renderPolymarketPositionsWithRemaining(cardState.node, result, mode, message);
  updateCardVisibility();
}

async function loadPolymarket(city, node, slug = polymarketSlug(city)) {
  const list = node.querySelector(".position-list");
  const cardState = renderedCards.get(city.code);
  const cached = readPolymarketCache(city, slug);
  if (cardState?.polymarketLoading) {
    return;
  }

  if (cardState?.polymarketMissingSlug === slug) {
    renderPolymarketUnavailable(node, "missing");
    return;
  }

  if (cached) {
    if (cardState) {
      cardState.marketPositions = cached.positions;
      cardState.polymarketMissingSlug = "";
    }
    refreshPolymarketCard(city.code, "cached");
  }

  if (cardState) {
    cardState.polymarketLoading = true;
  }

  if (!cached && !list.children.length && list.textContent !== "Unavailable" && list.textContent !== "No market today") {
    list.textContent = "Loading";
  }

  try {
    const response = await fetch(`${POLYMARKET_API_BASE_URL}${slug}?t=${Date.now()}`, { cache: "no-store" });
    if (response.status === 404) {
      removePolymarketCache(city, slug);
      if (cardState) {
        cardState.isClosed = false;
        cardState.hasGreenPositions = false;
        cardState.marketPositions = [];
        cardState.polymarketMissingSlug = slug;
      }
      node.classList.remove("is-closed");
      renderPolymarketUnavailable(node, "missing");
      updateCardVisibility();
      return;
    }

    if (!response.ok) {
      throw new Error(`Polymarket responded with ${response.status}`);
    }

    const event = await response.json();
    const positions = getMarketPositions(event.markets ?? []);
    const fresh = writePolymarketCache(city, slug, {
      isClosed: positions.some((position) => position.percent >= 95),
      positions
    });
    if (cardState) {
      cardState.marketPositions = fresh.positions;
      cardState.polymarketMissingSlug = "";
    }
    refreshPolymarketCard(city.code, "fresh");
  } catch (error) {
    const fallback = readPolymarketCache(city, slug);
    if (fallback) {
      if (cardState) {
        cardState.marketPositions = fallback.positions;
      }
      refreshPolymarketCard(city.code, "stale", error.message);
    } else {
      if (cardState) {
        cardState.marketPositions = [];
        cardState.hasGreenPositions = false;
      }
      renderPolymarketUnavailable(node, "unavailable", error.message);
      updateCardVisibility();
    }
  } finally {
    if (cardState) {
      cardState.polymarketLoading = false;
    }
  }
}

function loadAllPolymarkets() {
  const selectedDate = getSelectedMarketDate();
  renderedCards.forEach((cardState) => {
    const slug = polymarketSlug(cardState.city, selectedDate);
    cardState.polymarketSlug = slug;
    loadPolymarket(cardState.city, cardState.node, slug);
  });
}

function setSelectedDayOffset(nextOffset) {
  if (selectedDayOffset === nextOffset) {
    return;
  }

  selectedDayOffset = nextOffset;
  todayTab.setAttribute("aria-selected", String(selectedDayOffset === 0));
  tomorrowTab.setAttribute("aria-selected", String(selectedDayOffset === 1));

  renderedCards.forEach((cardState) => {
    cardState.polymarketLoading = false;
    cardState.weatherLoading = false;
    cardState.polymarketMissingSlug = "";
  });

  updateClocks();
  loadAllWeather();
  loadAllPolymarkets();
}

buildCards();
greenThresholdInput.value = String(greenSelectionThreshold);
todayTab.setAttribute("aria-selected", "true");
tomorrowTab.setAttribute("aria-selected", "false");
updateCardVisibility();
todayTab.addEventListener("click", () => {
  setSelectedDayOffset(0);
});
tomorrowTab.addEventListener("click", () => {
  setSelectedDayOffset(1);
});
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
  updateCardVisibility();
});
greenOnlyButton.addEventListener("click", () => {
  showOnlyGreen = !showOnlyGreen;
  greenOnlyButton.setAttribute("aria-pressed", String(showOnlyGreen));
  updateCardVisibility();
});
favoritesOnlyButton.addEventListener("click", () => {
  showOnlyFavorites = !showOnlyFavorites;
  favoritesOnlyButton.setAttribute("aria-pressed", String(showOnlyFavorites));
  updateCardVisibility();
});
function applyGreenThresholdInput() {
  const nextValue = Number(greenThresholdInput.value);
  greenSelectionThreshold = Number.isFinite(nextValue)
    ? Math.min(100, Math.max(MIN_GREEN_PERCENT, nextValue))
    : DEFAULT_GREEN_PERCENT;
  greenThresholdInput.value = String(greenSelectionThreshold);
  writeGreenSelectionThreshold();
  renderedCards.forEach((cardState) => {
    if (cardState.marketPositions?.length) {
      refreshPolymarketCard(cardState.city.code, "cached");
    }
  });
}

greenThresholdInput.addEventListener("change", applyGreenThresholdInput);
greenThresholdInput.addEventListener("input", applyGreenThresholdInput);
updateClocks();
setInterval(updateClocks, 1000);
loadAllWeather();
setInterval(loadAllWeather, WEATHER_REFRESH_MS);
loadAllPolymarkets();
setInterval(loadAllPolymarkets, POLYMARKET_REFRESH_MS);
