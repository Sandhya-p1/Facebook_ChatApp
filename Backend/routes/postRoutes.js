import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import {
  getPosts,
  posting,
  signleUserPosts,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/posting", protectRoute, posting);
router.get("/getPosts", protectRoute, getPosts);
router.get("/get/userPosts/:id", protectRoute, signleUserPosts); //remaining
export default router;
