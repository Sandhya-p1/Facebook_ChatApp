import express from "express";
import {
  checkingAuthUser,
  login,
  logout,
  signup,
} from "../controllers/authControllers.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/checkAuth", protectRoute, checkingAuthUser);

export default router;
