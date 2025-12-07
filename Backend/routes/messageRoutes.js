import express from "express";
import {
  getMessage,
  sendMessage,
  usersForSidebar,
} from "../controllers/messageControllers.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get("/getUsers", protectRoute, usersForSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
