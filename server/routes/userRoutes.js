import express from "express";

import { authToken } from "../middleware/auth.js";

import {
	register,
	login,
	updateUser,
	deleteUser,
	getUserById,
	getUsers,
	fillDatabase,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router
	.route("/id/:id")
	.patch(authToken, updateUser)
	.delete(authToken, deleteUser)
	.get(authToken, getUserById);

router.route("/").get(authToken, getUsers);

router.route("/fillDatabase").get(fillDatabase);

export default router;
