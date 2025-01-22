import express from "express";
import dotenv from "dotenv";

import { database } from "./models/init.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use("/products", productRoutes);
server.use("/users", userRoutes);
server.use("/orders", orderRoutes);
server.use("/reviews", reviewRoutes);

database
	.sync({ force: false })
	.then(() => {
		console.log("Connected to database");
		server.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Error connecting to database:", err);
	});
