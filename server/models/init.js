import database from "../config/db.config.js";
import Order from "./order.js";
import OrderItem from "./orderItem.js";
import Product from "./product.js";
import User from "./user.js";
import Review from "./review.js";

Order.hasMany(OrderItem, {
	as: "items",
	foreignKey: "orderId",
	onDelete: "CASCADE",
});
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderItem, { foreignKey: "productId", onDelete: "CASCADE" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Review, { foreignKey: "productId", onDelete: "CASCADE" });
Review.belongsTo(Product, { foreignKey: "productId" });

User.hasMany(Review, { foreignKey: "userId", onDelete: "CASCADE" });
Review.belongsTo(User, { foreignKey: "userId" });

export { database, Order, OrderItem, Product, User, Review };
