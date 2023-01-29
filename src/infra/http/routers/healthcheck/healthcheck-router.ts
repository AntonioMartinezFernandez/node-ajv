import { Router } from "express";

import { HealthController } from "./healthcheck-controller";

const healthRouter = Router();
const healthController = new HealthController();

healthRouter.get("/", healthController.run.bind(healthController));

export { healthRouter };
