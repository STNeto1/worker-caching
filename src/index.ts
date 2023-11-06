import { Hono } from "hono";

// @ts-ignore
import indexHtml from "../assets/static/index.html";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.html(indexHtml);
});

app.get("/no-cache", (_) => {
  return new Response(new Date().toISOString(), {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
});

app.get("/cached", (_) => {
  return new Response(new Date().toISOString(), {
    headers: {
      "Cache-Control": "public, max-age=10",
    },
  });
});

export default app;
