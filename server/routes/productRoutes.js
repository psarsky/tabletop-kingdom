/*
to add:
get route for reviews?
*/

import express from "express";
import {
	addProduct,
	updateProduct,
	deleteProduct,
	getProductByID,
	getProducts,
	getCategories,
	fillDatabase,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(addProduct).get(getProducts);

router
	.route("/id/:id")
	.patch(updateProduct)
	.delete(deleteProduct)
	.get(getProductByID);

router.route("/categories").get(getCategories);

router.route("/fillDatabase").get(fillDatabase);

export default router;
