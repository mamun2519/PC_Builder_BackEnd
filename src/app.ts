import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// parser
app.use([express.json(), cors(), express.urlencoded({ extended: true })]);

// APPlication Route
app.use("/api/v1", () => {});
// testing route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "server start" });
});

// global error handler

export default app;
