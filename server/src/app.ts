import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import { notFound } from "./middleware/notFound";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Chat server is running",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;