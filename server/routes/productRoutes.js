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

router.route("/").post(addProduct).get(getProducts);

router
	.route("/id/:id")
	.patch(updateProduct)
	.delete(deleteProduct)
    .get(getProductById);

router
	.route("/id/:id/reviews")
    .post(authToken, addReview)
    .get(getReviewsByProductId);

router.route("/categories").get(getCategories);

router.route("/fillDatabase").get(fillDatabase);

export default router;
