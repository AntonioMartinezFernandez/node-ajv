import { Request, Response } from "express";

import { ReturnAjvUserName } from "../../../../application/use-cases/return-ajv-user-name";
import { User } from "../../../../domain/user.type";

export class ValidationAjvController {
  async run(req: Request, res: Response) {
    const user: User = req.body;
    const response = new ReturnAjvUserName(user).exec();

    if (response instanceof Error) {
      res.status(400).send(response.message);
    } else {
      res.status(200).send(response);
    }
  }
}
