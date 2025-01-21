/*
todo:
add get route for reviews?
*/

import express from "express";
import { database } from "../database/database.js";
import Product from "../models/product.js";

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { title, price, description, category, image, rating, stock } =
			req.body;
		if (!title || !price || !category || !image || !stock) {
			return res.status(400).json({
				error: `Required fields are missing: ${
					!title
						? "title"
						: !price
						? "price"
						: !category
						? "category"
						: !image
						? "image"
						: "stock"
				}`,
			});
		}
		const newProduct = await Product.create({
			title,
			price,
			description,
			category,
			image,
			rating: rating ? rating.rate : null,
			count: rating ? rating.count : null,
			stock,
		});
		res.status(201).json({ id: newProduct.id });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.patch("/id/:id", async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	if (!product) res.status(404).send("Product not found");
	else {
		const { title, price, description, category, image, rating, stock } =
			req.body;
		if (!title && !price && !description && !category && !image && !stock) {
			return res.status(400).send("No fields to update");
		}
		await product.update({
			title: title ? title : product.title,
			price: price ? price : product.price,
			description: description ? description : product.description,
			category: category ? category : product.category,
			image: image ? image : product.image,
			rating: rating ? rating.rate : product.rating,
			count: rating ? rating.count : product.count,
			stock: stock ? stock : product.stock,
		});
		res.status(200).send("Product updated");
	}
});

router.delete("/id/:id", async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	if (!product) res.status(404).send("Product not found");
	else {
		await product.destroy();
		await database.query(
			"DELETE FROM sqlite_sequence WHERE name='Products'"
		);
		res.status(200).send("Product deleted");
	}
});

router.get("/id/:id", async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	if (!product) res.status(404).send("Product not found");
	else res.status(200).json(product);
});

router.get("/", async (_, res) => {
	const products = await Product.findAll();
	res.status(200).json(products);
});

router.get("/categories", async (_, res) => {
	const categories = await Product.findAll({
        attributes: ["category"],
        group: ["category"],
    });
	res.status(200).json(categories);
});

export default router;
