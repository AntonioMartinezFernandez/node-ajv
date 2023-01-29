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
import { validationAjvRouter } from "./routers/validation-ajv/validation-ajv-router";

export function startHttpServer() {
  const app = express();

  // Body Parser
  app.use(bodyParser.json());
  app.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (err) {
        res.send("Invalid Request data");
      } else {
        next();
      }
    }
  );

  // Security Middlewares
  app.use(cors());
  app.use(hpp());
  app.use(helmet());

  // Routes
  app.use("/healthcheck", healthRouter);
  app.use("/validate", validationRouter);
  app.use("/validate-ajv", validationAjvRouter);

  const { HTTP_PORT } = config.server;

  app.listen(HTTP_PORT, () => {
    console.log(`[APP] - Starting application on port ${HTTP_PORT}`);
  });
}
