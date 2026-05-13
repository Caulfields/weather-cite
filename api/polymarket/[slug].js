const POLYMARKET_API_BASE_URL = "https://gamma-api.polymarket.com/events/slug/";
const POLYMARKET_CLOB_BASE_URL = "https://clob.polymarket.com";

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

function yesTokenId(market) {
  const outcomes = parseJsonArray(market.outcomes);
  const tokenIds = parseJsonArray(market.clobTokenIds);
  const yesIndex = outcomes.findIndex((outcome) => String(outcome).toLowerCase() === "yes");
  return yesIndex > -1 ? tokenIds[yesIndex] : "";
}

async function addLivePrices(event) {
  const markets = Array.isArray(event?.markets) ? event.markets : [];
  const tokenByMarket = new Map();
  const tokenRequests = [];

  markets.forEach((market) => {
    const tokenId = yesTokenId(market);
    if (tokenId) {
      tokenByMarket.set(market, tokenId);
      tokenRequests.push({ token_id: tokenId });
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
      "user-agent": "city-stat-vercel"
    },
    body: JSON.stringify(tokenRequests)
  });

  if (!response.ok) {
    return event;
  }

  const prices = await response.json();
  markets.forEach((market) => {
    const tokenId = tokenByMarket.get(market);
    const price = Number(prices[tokenId]);
    if (Number.isFinite(price)) {
      market.liveYesPrice = price;
    }
  });

  return event;
}

export default async function handler(request, response) {
  const { slug } = request.query;
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!/^[a-z0-9-]+$/.test(normalizedSlug || "")) {
    response.status(400).json({ error: "Invalid slug" });
    return;
  }

  try {
    const apiResponse = await fetch(`${POLYMARKET_API_BASE_URL}${normalizedSlug}?t=${Date.now()}`, {
      headers: {
        accept: "application/json",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "user-agent": "city-stat-vercel"
      }
    });
    if (!apiResponse.ok) {
      const body = await apiResponse.text();
      response.setHeader("Cache-Control", "no-store, no-cache, max-age=0, must-revalidate");
      response.setHeader("Pragma", "no-cache");
      response.setHeader("Expires", "0");
      response.setHeader("Content-Type", apiResponse.headers.get("content-type") || "application/json; charset=utf-8");
      response.status(apiResponse.status).send(body);
      return;
    }

    const event = await apiResponse.json();
    const body = JSON.stringify(await addLivePrices(event));

    response.setHeader("Cache-Control", "no-store, no-cache, max-age=0, must-revalidate");
    response.setHeader("Pragma", "no-cache");
    response.setHeader("Expires", "0");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.status(apiResponse.status).send(body);
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
}
