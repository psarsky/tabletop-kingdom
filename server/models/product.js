import { DataTypes } from "sequelize";
import { database } from "../database/database.js";

const Product = database.define("Product", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
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
	image: {
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
});

export default Product;
