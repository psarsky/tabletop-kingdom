import { database, Product, Order, OrderItem } from "../models/init.js";

const addOrder = async (req, res) => {
	try {
		const items = req.body;
		if (!items || !Array.isArray(items) || items.length === 0) {
			return res.status(400).json({ error: "Invalid data format" });
		}
		for (const item of items) {
			if (!item.productId || !item.quantity || !item.price) {
				return res.status(400).json({ error: "Invalid data format" });
			}
			const product = await Product.findByPk(item.productId);
			if (!product) {
				return res.status(404).json({ error: "Product not found" });
			}
			if (item.quantity < 1) {
				return res
					.status(400)
					.json({ error: "Quantity must be greater than 0" });
			}
		}
		let total = 0;
		items.forEach((item) => {
			total += item.price * item.quantity;
		});
		const order = await Order.create({ userId: req.user.id, total });
		const orderItems = items.map((item) => ({
			orderId: order.id,
			productId: item.productId,
			quantity: item.quantity,
			price: item.price,
		}));
		await OrderItem.bulkCreate(orderItems);
		return res.status(201).json({ orderId: order.id });
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while creating an order: ${error.message}`,
		});
	}
};

const updateOrder = async (req, res) => {
	try {
		const order = await Order.findByPk(req.params.id);
		if (!order) return res.status(404).send("Order not found");
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const items = req.body;
		if (!items || !Array.isArray(items) || items.length === 0) {
			return res.status(400).send("No fields to update");
		}
		for (const item of items) {
			if (!item.productId || !item.price) {
				return res.status(400).json({ error: "Invalid data format" });
			}
			if (item.quantity < 0) {
				return res.status(400).json({ error: "Quantity must be >= 0" });
			}
		}
		for (const item of items) {
			const details = await OrderItem.findOne({
				where: { orderId: order.id, productId: item.productId },
			});
			if (details) {
				if (item.quantity > 0) {
					await details.update({
						quantity: item.quantity,
						price: item.price,
					});
				} else {
					await details.destroy();
				}
			} else if (item.quantity > 0) {
				await OrderItem.create({
					orderId: order.id,
					productId: item.productId,
					quantity: item.quantity,
					price: item.price,
				});
			}
		}
		const orderItems = await OrderItem.findAll({
			where: { orderId: order.id },
		});
		const total = orderItems.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		await order.update({
			total: total,
		});
		return res.status(200).send("Order updated");
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while updating an order: ${error.message}`,
		});
	}
};

const deleteOrder = async (req, res) => {
	try {
		const order = await Order.findByPk(req.params.id);
		if (!order) return res.status(404).send("Order not found");
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		await order.destroy();
		await database.query("DELETE FROM sqlite_sequence WHERE name='Orders'");
		await database.query(
			"DELETE FROM sqlite_sequence WHERE name='OrderItems'"
		);
		return res.status(200).send("Order deleted");
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while deleting an order: ${error.message}`,
		});
	}
};

const getOrderById = async (req, res) => {
	try {
		const order = await Order.findByPk(req.params.id, {
			include: [
				{
					model: OrderItem,
					as: "items",
				},
			],
		});
		if (!order) return res.status(404).send("Order not found");
		if (req.user.role !== "admin" && order.userId != req.user.id)
			return res.status(403).send("Forbidden");
		return res.status(200).json(order);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while searching for an order: ${error.message}`,
		});
	}
};

const getUserOrders = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.userId != req.user.id)
			return res.status(403).send("Forbidden");
		const orders = await Order.findAll({
			where: { userId: req.params.userId },
			include: [
				{
					model: OrderItem,
					as: "items",
				},
			],
		});
		if (orders.length === 0)
			return res.status(404).send("No orders found for this user");
		return res.status(200).json(orders);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while searching for orders: ${error.message}`,
		});
	}
};

const getOrders = async (req, res) => {
	try {
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const orders = await Order.findAll({
			include: [
				{
					model: OrderItem,
					as: "items",
				},
			],
		});
		return res.status(200).json(orders);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while searching for orders: ${error.message}`,
		});
	}
};

const fillDatabase = async (req, res) => {
	try {
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const response = await fetch("https://dummyjson.com/carts?limit=0");
		const data = await response.json();
		for (const cart of data.carts) {
			const { products, total, userId } = cart;
			const order = await Order.create({ userId, total });
			const orderItems = products.map((item) => ({
				orderId: order.id,
				productId: item.id,
				quantity: item.quantity,
				price: item.price,
			}));
			await OrderItem.bulkCreate(orderItems);
		}
		return res.status(201).send("Database filled");
	} catch (error) {
		return res.status(500).send(`Error filling database: ${error.message}`);
	}
};

export {
	addOrder,
	updateOrder,
	deleteOrder,
	getOrderById,
	getUserOrders,
	getOrders,
	fillDatabase,
};
