import database from "../config/db.config.js";
import Order from "./order.js";
import OrderItem from "./orderItem.js";
import Product from "./product.js";
import User from "./user.js";

Order.hasMany(OrderItem, {
	as: "items",
	foreignKey: "orderId",
	onDelete: "CASCADE",
});
OrderItem.belongsTo(Order, { foreignKey: "orderId", onDelete: "CASCADE" });

Product.hasMany(OrderItem, { foreignKey: "productId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

export { database, Order, OrderItem, Product, User };
