import express, { Application, Request, Response } from "express";
import cors from "cors";
import rootRoute from "./app/routes/index";
const app: Application = express();

// parser
app.use([express.json(), cors(), express.urlencoded({ extended: true })]);

// APPlication Route
app.use("/api/v1", rootRoute);
// testing route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "server start" });
});

// global error handler

export default app;
