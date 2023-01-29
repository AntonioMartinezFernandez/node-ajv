import { Router } from "express";

import { ValidationAjvController } from "./validation-ajv-controller";

const validationAjvRouter = Router();
const validationAjvController = new ValidationAjvController();

validationAjvRouter.post(
  "/",
  validationAjvController.run.bind(validationAjvController)
);

export { validationAjvRouter };
