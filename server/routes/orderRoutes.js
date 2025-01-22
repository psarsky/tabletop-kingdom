import express from "express";

import { authToken } from "../middleware/auth.js";
import {
	addOrder,
	updateOrder,
	deleteOrder,
    getOrderById,
    getUserOrders,
	getOrders,
	fillDatabase,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(authToken, addOrder).get(authToken, getOrders);

router.route("/user/:userId").get(authToken, getUserOrders);

router
	.route("/id/:id")
	.patch(authToken, updateOrder)
	.delete(authToken, deleteOrder)
	.get(authToken, getOrderById);

router.route("/fillDatabase").get(authToken, fillDatabase);

export default router;
