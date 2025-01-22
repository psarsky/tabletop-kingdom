import { DataTypes } from "sequelize";

import database from "../config/db.config.js";

const Order = database.define(
	"Order",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

export default Order;
