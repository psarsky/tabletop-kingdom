import { DataTypes } from "sequelize";

import database from "../config/db.config.js";

const Product = database.define(
	"Product",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		thumbnail: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		count: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

export default Product;
