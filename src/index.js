import express from "express";
import "dotenv/config"

import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("api/auth",authRoutes);

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
}); 