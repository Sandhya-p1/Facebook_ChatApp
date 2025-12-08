import express from "express";
import protectRoute from "../middleware/protectedRoute.js";
import {
  getComments,
  postComment,
  postLikes,
} from "../controllers/likeCommentControllers.js";

const router = express.Router();
router.post("/likes/:postId", protectRoute, postLikes);
router.post("/comment/:postId", protectRoute, postComment);
router.get("/getComment/:postId", protectRoute, getComments);

export default router;
