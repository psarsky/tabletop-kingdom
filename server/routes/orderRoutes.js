import express from "express";
import {
	addOrder,
	updateOrder,
	deleteOrder,
    getOrderByID,
    getUserOrders,
	getOrders,
	fillDatabase,
} from "../controllers/orderController.js";
import { authToken } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(authToken, addOrder).get(getOrders);

router.route("/user/:userID").get(authToken, getUserOrders);

router
	.route("/id/:id")
	.patch(authToken, updateOrder)
	.delete(authToken, deleteOrder)
	.get(getOrderByID);

router.route("/fillDatabase").get(fillDatabase);

export default router;
