import express from "express";
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

router.route("/id/:id").patch(updateUser).delete(deleteUser).get(getUserById);

router.route("/").get(getUsers);

router.route("/fillDatabase").get(fillDatabase);

export default router;
