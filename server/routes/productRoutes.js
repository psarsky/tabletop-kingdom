import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (_, res) => {
	const products = await Product.findAll();
	res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	if (!product) res.status(404).send("Product not found");
	else res.status(200).json(product);
});

router.post("/", async (req, res) => {
	try {
        const {
            id,
            title,
            price,
            description,
            category,
            image,
            rating
        } = req.body;
		if (!title || !price || !category || !image) {
			return res
				.status(400)
				.json({ error: "Required fields are missing" });
		}
		const newProduct = await Product.create({
			id,
			title,
			price,
			description,
			category,
			image,
			rating: rating ? rating.rate : null,
			count: rating ? rating.count : null,
		});
		res.status(201).json({ id: newProduct.id });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.delete("/:id", async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	if (!product) res.status(404).send("Product not found");
	else {
		await product.destroy();
		res.status(200).send("Product deleted");
	}
});

export default router;
