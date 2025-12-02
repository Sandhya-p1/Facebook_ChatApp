import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // all users except logged in user
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    res.status(201).json(allUsers);
  } catch (error) {
    console.error("error in get all users:", error);
    res.status(500).json({ error: "internal server errror" });
  }
};
