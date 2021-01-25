import express, { Router } from "express";

export const routes: Router = express.Router();

routes.get("/", (_req, res) => {
  res.json({ status: "online" });
});
