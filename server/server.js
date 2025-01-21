import express from "express";
import { initDb } from "./database/database.js";
import productRoutes from "./routes/productRoutes.js";

const server = express();
const PORT = 3000;

server.use(express.json());
server.use("/products", productRoutes);

const startServer = async () => {
    await initDb();
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
