import Post from "../models/postModelSchema.js";
import User from "../models/userModelSchema.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in get users for sidebar:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.params.id;
  try {
    const userPosts = await Post.find({ user: userId }).populate(
      "user",
      "userName"
    );
    console.log({ userPosts });
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
