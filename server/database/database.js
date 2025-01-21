import { Sequelize } from "sequelize";

const database = new Sequelize({
	dialect: "sqlite",
    storage: "./database.sqlite",
});

const initDb = async () => {
	await database.sync({ force: false });
	console.log("Database synced");
};

export { database, initDb };
