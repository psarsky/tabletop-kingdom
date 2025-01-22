import { database, Review, User, Product } from "../models/init.js";

const addReview = async (req, res) => {
	try {
		const { rating, comment } = req.body;
		const review = await Review.create({
			productId: req.params.id,
			userId: req.user.id,
			rating,
			comment,
		});
		const [result] = await Review.findAll({
			where: { productId: req.params.id },
			attributes: [
				[database.fn("AVG", database.col("rating")), "averageRating"],
				[database.fn("COUNT", database.col("id")), "reviewCount"],
			],
			raw: true,
		});
		await Product.update(
			{
				rating: result.averageRating,
				count: result.reviewCount,
			},
			{ where: { id: req.params.id } }
		);
		return res.status(201).json({ id: review.id });
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while adding a review: ${error.message}`,
		});
	}
};

const deleteReview = async (req, res) => {
	try {
		const review = await Review.findByPk(req.params.id);
		if (!review) return res.status(404).json({ error: "Review not found" });
		if (req.user.role !== "admin" && review.userId != req.user.id)
			return res.status(403).send("Forbidden");
		await review.destroy();
		await database.query(
			"DELETE FROM sqlite_sequence WHERE name='Reviews'"
		);
		const [result] = await Review.findAll({
			where: { productId: review.productId },
			attributes: [
				[database.fn("AVG", database.col("rating")), "averageRating"],
				[database.fn("COUNT", database.col("id")), "reviewCount"],
			],
			raw: true,
		});
		await Product.update(
			{
				rating: result.averageRating || 0,
				count: result.reviewCount || 0,
			},
			{ where: { id: review.productId } }
		);
		return res.status(200).send("Review deleted");
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while deleting a review: ${error.message}`,
		});
	}
};

const getReviewsByProductId = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.id != req.user.id)
			return res.status(403).send("Forbidden");
		const reviews = await Review.findAll({
			where: { productId: req.params.id },
		});
		if (!reviews)
			return res.status(404).json({ error: "Reviews not found" });
		return res.status(200).json(reviews);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while getting reviews: ${error.message}`,
		});
	}
};

const getReviewsByUserId = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.userId != req.user.id)
			return res.status(403).send("Forbidden");
		const reviews = await Review.findAll({
			where: { userId: req.params.userId },
		});
		if (reviews.length === 0)
			return res.status(404).json({ error: "Reviews not found" });
		return res.status(200).json(reviews);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while getting reviews: ${error.message}`,
		});
	}
};

const getReviews = async (req, res) => {
	try {
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const reviews = await Review.findAll();
		if (!reviews)
			return res.status(404).json({ error: "Reviews not found" });
		return res.status(200).json(reviews);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while getting reviews: ${error.message}`,
		});
	}
};

const fillDatabase = async (req, res) => {
	try {
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const response = await fetch("https://dummyjson.com/products?limit=0");
		const data = await response.json();
		const toAdd = [];
		for (const product of data.products) {
			for (const review of product.reviews) {
				const user = await User.findOne({
					where: { email: review.reviewerEmail },
				});
				if (user) {
					toAdd.push({
						productId: product.id,
						userId: user.id,
						rating: review.rating,
						comment: review.comment,
					});
				}
			}
		}
		await Review.bulkCreate(toAdd);
		const averages = await Review.findAll({
			attributes: [
				"productId",
				[database.fn("AVG", database.col("rating")), "averageRating"],
				[database.fn("COUNT", database.col("id")), "reviewCount"],
			],
			group: ["productId"],
		});
		for (const avg of averages) {
			await Product.update(
				{
					rating: avg.get("averageRating"),
					count: avg.get("reviewCount"),
				},
				{ where: { id: avg.get("productId") } }
			);
		}
		return res.status(201).send("Database filled");
	} catch (error) {
		return res
			.status(500)
			.json({ error: `Error filling database: ${error.message}` });
	}
};

export {
	addReview,
	deleteReview,
	getReviewsByProductId,
	getReviewsByUserId,
	getReviews,
	fillDatabase,
};
