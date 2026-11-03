export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (url.pathname === "/") {
      return Response.json({
        name: "Messenger Lait",
        status: "online",
        message: "Сервер работает!"
      }, { headers });
    }

    if (url.pathname === "/health") {
      return Response.json({ status: "ok" }, { headers });
    }

    return Response.json(
      { error: "Маршрут не найден" },
      { status: 404, headers }
    );
  }
};
