const POLYMARKET_API_BASE_URL = "https://gamma-api.polymarket.com/events/slug/";

export default async function handler(request, response) {
  const { slug } = request.query;
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!/^[a-z0-9-]+$/.test(normalizedSlug || "")) {
    response.status(400).json({ error: "Invalid slug" });
    return;
  }

  try {
    const apiResponse = await fetch(`${POLYMARKET_API_BASE_URL}${normalizedSlug}`, {
      headers: {
        accept: "application/json",
        "user-agent": "city-stat-vercel"
      }
    });
    const body = await apiResponse.text();

    response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=30");
    response.setHeader("Content-Type", apiResponse.headers.get("content-type") || "application/json; charset=utf-8");
    response.status(apiResponse.status).send(body);
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
}
