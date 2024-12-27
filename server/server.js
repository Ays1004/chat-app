import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hey Guy!");
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log("Server Running on http://localhost:5000/"));