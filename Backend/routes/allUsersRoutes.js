import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getAllUsers, getUserProfile } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/allUsers", protectRoute, getAllUsers);
router.get("/userProfile/:id", protectRoute, getUserProfile);
export default router;
