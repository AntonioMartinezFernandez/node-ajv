import { Request, Response } from "express";

export class ValidationController {
  async runGet(req: Request, res: Response) {
    res.status(200).send();
  }

  async runPost(req: Request, res: Response) {
    const name = req.body.name;
    res.status(201).send({ name });
  }
}
