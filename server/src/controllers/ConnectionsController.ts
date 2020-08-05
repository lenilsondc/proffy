import { Request, Response } from "express";

import db from "../database/connections";

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const [{ total }] = await db("connections").count("* as total");

    return res.send({ total });
  }
  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db("connections").insert({
      user_id,
    });

    return res.status(201).send();
  }
}
