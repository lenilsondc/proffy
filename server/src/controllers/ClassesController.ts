import { Request, Response } from "express";

import db from "../database/connections";
import hourToMinute from "../util/convertHourToMinutes";

interface ScheduleItem {
  weekday: number;
  from: string;
  to: string;
}

interface ClassesQuery {
  weekday?: number;
  subject?: string;
  time?: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const { weekday, subject, time }: ClassesQuery = req.query;

    if (!weekday || !subject || !time) {
      return res.status(400).json({
        error: "Missing query filters. Try adding weekday, subject or time",
      });
    }
    const timeInMinutes = hourToMinute(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`weekday` = ??", [Number(weekday)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.status(200).json(classes);
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      hourly_rate,
      schedule,
    } = req.body;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const [class_id] = await trx("classes").insert({
        subject,
        hourly_rate,
        user_id,
      });

      const schedules = schedule.map((schedule: ScheduleItem) => {
        return {
          class_id,
          weekday: schedule.weekday,
          from: hourToMinute(schedule.from),
          to: hourToMinute(schedule.to),
        };
      });

      await trx("class_schedule").insert(schedules);

      await trx.commit();

      res.status(201).send();
    } catch (e) {
      await trx.rollback();
      res
        .status(400)
        .json({ message: "Unexpected error while creating class" });
    }
  }
}
