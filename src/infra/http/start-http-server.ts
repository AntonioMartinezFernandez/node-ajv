import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";

import { config } from "../../config";
import { healthRouter } from "./routers/healthcheck/healthcheck-router";
import { validationRouter } from "./routers/validation/validation-router";

export function startHttpServer() {
  const app = express();
  app.use(bodyParser.json());

  // Security Middlewares
  app.use(cors());
  app.use(hpp());
  app.use(helmet());

  // Routes
  app.use("/healthcheck", healthRouter);
  app.use("/validate", validationRouter);

  const { HTTP_PORT } = config.server;

  app.listen(HTTP_PORT, () => {
    console.log(`[APP] - Starting application on port ${HTTP_PORT}`);
  });
}
