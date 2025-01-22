import express from "express";

import { authToken } from "../middleware/auth.js";
import {
	deleteReview,
	getReviewsByUserId,
	getReviews,
	fillDatabase,
} from "../controllers/reviewController.js";

const router = express.Router();

router.route("/:id").delete(authToken, deleteReview);

router.route("/user/:userId").get(authToken, getReviewsByUserId);

router.route("/").get(authToken, getReviews);

router.route("/filldatabase").get(authToken, fillDatabase);

export default router;
