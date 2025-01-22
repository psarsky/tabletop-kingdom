import { DataTypes } from "sequelize";

import database from "../config/db.config.js";

const OrderItem = database.define(
	"OrderItem",
	{
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

export default OrderItem;
