import express from 'express';
import { authUser, registerUser, logout, updateUserProfile, getUsers, getUserById, updateUser, deleteUsers } from '../controllers/user.controllers.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.route("/auth").post(authUser);
router.route("/logout").post(logout);
router.route("/profile").put(protect, updateUserProfile);
router.route("/edit").put(protect, admin, updateUser);
router.route("/:id").get(protect, admin, getUserById).delete(protect, admin, deleteUsers);

export default router;
