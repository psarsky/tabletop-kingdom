/*
to add:
get route for reviews?
*/

import { database } from "../config/db.config.js";
import Product from "../models/product.js";

const addProduct = async (req, res) => {
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
		return res.status(201).json({ id: newProduct.id });
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while adding a product: ${error.message}`,
		});
	}
};

const updateProduct = async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (!product) return res.status(404).send("Product not found");
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
		return res.status(200).send("Product updated");
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while updating a product: ${error.message}`,
		});
	}
};

const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (!product) return res.status(404).send("Product not found");
		await product.destroy();
		await database.query(
			"DELETE FROM sqlite_sequence WHERE name='Products'"
		);
		return res.status(200).send("Product deleted");
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while deleting a product: ${error.message}`,
		});
	}
};

const getProductByID = async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (!product) return res.status(404).send("Product not found");
		return res.status(200).json(product);
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while searching for a product: ${error.message}`,
		});
	}
};

const getProducts = async (_, res) => {
	try {
		const products = await Product.findAll();
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while searching for products: ${error.message}`,
		});
	}
};

const getCategories = async (_, res) => {
	try {
		const categories = await Product.findAll({
			attributes: ["category"],
			group: ["category"],
		});
		return res.status(200).json(categories);
	} catch (error) {
		return res.status(500).json({
			error: `An error occurred while searching for categories: ${error.message}`,
		});
	}
};

export {
	addProduct,
	updateProduct,
	deleteProduct,
	getProductByID,
	getProducts,
	getCategories,
};
