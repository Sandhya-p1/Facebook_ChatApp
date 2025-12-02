import jwt from "jsonwebtoken";
import User from "../models/userModelSchema.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.json({ error: " token is not available" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.json({ error: " token is not authorized" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.json({ error: " user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error in protect route" });
  }
};

export default protectRoute;
