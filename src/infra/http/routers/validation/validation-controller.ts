import { Request, Response } from "express";

import { ReturnUserName } from "../../../../application/use-cases/return-user-name";
import { User } from "../../../../domain/user.type";

export class ValidationController {
  async runGet(req: Request, res: Response) {
    res.status(200).send();
  }

  async run(req: Request, res: Response) {
    const user: User = req.body;
    const response = new ReturnUserName(user).exec();

    if (response instanceof Error) {
      res.status(400).send(response.message);
    } else {
      res.status(200).send(response);
    }
  }
}
