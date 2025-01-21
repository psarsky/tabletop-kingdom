import express from "express";
import { initDb } from "./config/db.config.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use("/products", productRoutes);
server.use("/users", userRoutes);

const startServer = async () => {
    await initDb();
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
