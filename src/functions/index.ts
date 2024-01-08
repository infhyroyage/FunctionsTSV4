import { app } from "@azure/functions";
import healthcheck from "./healthcheck";

app.http("healthcheck", {
  methods: ["GET", "POST"],
  authLevel: "function",
  handler: healthcheck,
});
