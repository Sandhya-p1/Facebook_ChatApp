import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import { getPosts, posting } from "../controllers/postControllers.js";

const router = express.Router();

router.post("/posting", protectRoute, posting);
router.get("/getPosts", protectRoute, getPosts);
export default router;
