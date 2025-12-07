import Post from "../models/postModelSchema.js";

export const posting = async (req, res) => {
  const { caption } = req.body;
  const userId = req.user._id;
  try {
    const newPost = new Post({
      caption,
      user: userId,
    });
    await newPost.save();
    res.status(200).json({ message: "Post added successfully", newPost });
  } catch (error) {
    console.error("Error in getting posts for feed:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const posts = await Post.find().populate("user", "userName").lean();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getting posts for feed:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
