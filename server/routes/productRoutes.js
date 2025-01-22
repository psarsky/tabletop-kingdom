import express from "express";

import { authToken } from "../middleware/auth.js";
import {
	addProduct,
	updateProduct,
	deleteProduct,
	getProductById,
	getProducts,
	getCategories,
	fillDatabase,
} from "../controllers/productController.js";
import {
	addReview,
	getReviewsByProductId,
} from "../controllers/reviewController.js";

const router = express.Router();

router.route("/").post(authToken, addProduct).get(getProducts);

router
	.route("/id/:id")
	.patch(authToken, updateProduct)
	.delete(authToken, deleteProduct)
	.get(getProductById);

router
	.route("/id/:id/reviews")
    .post(authToken, addReview)
    .get(getReviewsByProductId);

router.route("/categories").get(getCategories);

router.route("/fillDatabase").get(authToken, fillDatabase);

export default router;
