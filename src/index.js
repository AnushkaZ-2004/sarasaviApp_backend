import express from "express";
import "dotenv/config";

import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// FIX: Added missing slash
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
    connectDB();
});
