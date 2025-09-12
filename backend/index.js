import express from "express";
import { AllRoutes } from "../backend/routes/AllRoutes.js";
import cors from "cors";
import { Client } from "pg"
import { config } from "dotenv";
import "dotenv"
config({path: "./.env"})

const PORT = process.env.PORT || 5000;;

const app = express();
export const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect().then(() => console.log("Connected to the database")).catch((err) => console.log(err.message));

app.use( cors());
app.use(express.json());
app.use("/api", AllRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
 