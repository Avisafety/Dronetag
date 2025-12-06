import express from "express";
import bodyParser from "body-parser";
import dronetagWebhook from "./src/dronetagWebhook.js";

const app = express();
app.use(bodyParser.json());

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("AviSafe Dronetag backend running");
});

// DRONETAG WEBHOOK ENDPOINT
app.post("/api/dronetag/webhook", dronetagWebhook);

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
