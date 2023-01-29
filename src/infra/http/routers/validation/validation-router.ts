import { Router } from "express";

import { ValidationController } from "./validation-controller";

const validationRouter = Router();
const validationController = new ValidationController();

validationRouter.post("/", validationController.run.bind(validationController));

export { validationRouter };
