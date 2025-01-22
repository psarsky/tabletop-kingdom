import express from "express";
import {
	addOrder,
	updateOrder,
	deleteOrder,
	getOrderByID,
	getOrders,
	fillDatabase,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(addOrder).get(getOrders);

router
	.route("/id/:id")
	.patch(updateOrder)
	.delete(deleteOrder)
	.get(getOrderByID);

router.route("/fillDatabase").get(fillDatabase);

export default router;
