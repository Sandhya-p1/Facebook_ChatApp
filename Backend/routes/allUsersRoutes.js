import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getAllUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/allUsers", protectRoute, getAllUsers);
export default router;
