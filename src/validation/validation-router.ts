import { Router } from "express";

import { ValidationController } from "./validation-controller";

const validationRouter = Router();
const validationController = new ValidationController();

validationRouter.get(
  "/",
  validationController.runGet.bind(validationController)
);
validationRouter.post(
  "/",
  validationController.runPost.bind(validationController)
);

export { validationRouter };
