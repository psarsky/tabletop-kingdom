import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { database, User } from "../models/init.js";

const register = async (req, res) => {
	try {
		const {
			username,
			email,
			password,
			firstName,
			lastName,
			address,
			postalCode,
			city,
			phone,
		} = req.body;
		if (
			!username ||
			!email ||
			!password ||
			!firstName ||
			!lastName ||
			!address ||
			!postalCode ||
			!city
		) {
			return res.status(400).json({
				error: `Required fields are missing: ${
					!username
						? "username"
						: !email
						? "email"
						: !password
						? "password"
						: !firstName
						? "firstName"
						: !lastName
						? "lastName"
						: !address
						? "address"
						: !postalCode
						? "postalCode"
						: "city"
				}`,
			});
		}
		const users = await User.findAll({
			where: {
				[Op.or]: [{ username: username }, { email: email }],
			},
		});
		if (users.length) {
			for (let user of users) {
				if (user.username === username) {
					return res
						.status(400)
						.send(
							"Username already exists, please choose another one"
						);
				}
				if (user.email === email) {
					return res
						.status(400)
						.send(
							"Email already exists, please choose another one or login"
						);
				}
			}
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			username,
			email,
			password: hashedPassword,
			firstName,
			lastName,
			address,
			postalCode,
			city,
			phone,
		});
		return res.status(201).json({ id: user.id });
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred during registration: ${error.message}`,
		});
	}
};

const login = async (req, res) => {
	try {
		const { login, password } = req.body;
		const user = await User.findOne({
			where: {
				[Op.or]: [{ email: login }, { username: login }],
			},
		});
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(400).send("Invalid email/username or password");
		}
		const token = jwt.sign(
			{ id: user.id, username: user.username, role: user.role },
			process.env.TOKEN_SECRET,
			{
				expiresIn: "1h",
			}
		);
		return res.status(200).json({ token });
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred during login: ${error.message}`,
		});
	}
};

const updateUser = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.id != req.user.id)
			return res.status(403).send("Forbidden");
		const user = await User.findByPk(req.params.id);
		if (!user) return res.status(404).send("User not found");
		const {
			username,
			email,
			password,
			firstName,
			lastName,
			address,
			postalCode,
			city,
			phone,
		} = req.body;
		if (
			!username &&
			!email &&
			!password &&
			!firstName &&
			!lastName &&
			!address &&
			!postalCode &&
			!city &&
			!phone
		) {
			return res.status(400).send("No fields to update");
		}
		await user.update({
			username: username ? username : user.username,
			email: email ? email : user.email,
			password: password
				? await bcrypt.hash(password, 10)
				: user.password,
			firstName: firstName ? firstName : user.firstName,
			lastName: lastName ? lastName : user.lastName,
			address: address ? address : user.address,
			postalCode: postalCode ? postalCode : user.count,
			city: city ? city : user.city,
			phone: phone ? phone : user.phone,
		});
		return res.status(200).send("User updated");
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while updating a user: ${error.message}`,
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.id != req.user.id)
			return res.status(403).send("Forbidden");
		const user = await User.findByPk(req.params.id);
		if (!user) return res.status(404).send("User not found");
		await user.destroy();
		await database.query("DELETE FROM sqlite_sequence WHERE name='Users'");
		return res.status(200).send("User deleted");
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while deleting a user: ${error.message}`,
		});
	}
};

const getUserById = async (req, res) => {
	try {
		if (req.user.role !== "admin" && req.params.id != req.user.id)
			return res.status(403).send("Forbidden");
		const user = await User.findByPk(req.params.id);
		if (!user) return res.status(404).send("User not found");
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while searching for a user: ${error.message}`,
		});
	}
};

const getUsers = async (req, res) => {
	try {
		if (req.user.role !== "admin") return res.status(403).send("Forbidden");
		const users = await User.findAll();
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({
			error: `An unexpected error occurred while searching for users: ${error.message}`,
		});
	}
};

const fillDatabase = async (_, res) => {
	try {
		const response = await fetch("https://dummyjson.com/users?limit=0");
		const data = await response.json();
		const toAdd = await Promise.all(
			data.users.map(async (user) => ({
				username: user.username,
				email: user.email,
				password: await bcrypt.hash(user.password, 10),
				firstName: user.firstName,
				lastName: user.lastName,
				address: user.address.address,
				postalCode: user.address.postalCode,
				city: user.address.city,
				phone: user.phone,
				role: user.role,
			}))
		);
		await User.bulkCreate(toAdd);
		return res.status(201).send("Database filled");
	} catch (error) {
		return res
			.status(500)
			.json({ error: `Error filling database: ${error.message}` });
	}
};

export {
	register,
	login,
	updateUser,
	deleteUser,
	getUserById,
	getUsers,
	fillDatabase,
};
