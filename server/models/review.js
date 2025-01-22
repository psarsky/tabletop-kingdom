import { DataTypes } from "sequelize";

import database from "../config/db.config.js";

const Review = database.define(
	"Review",
	{
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: { min: 0, max: 5 },
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);

export default Review;
