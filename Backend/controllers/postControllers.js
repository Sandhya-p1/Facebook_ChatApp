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
    const userId = req.user?._id;
    const posts = await Post.find().populate("user", "userName").lean();
    const postsWithLikeInfo = posts.map((post) => ({
      ...post,
      totalLikes: post.likedBy.length,
      isLiked: post.likedBy.some((id) => id?.equals(userId)), // ✅ dynamic
    }));

    res.json(postsWithLikeInfo);
  } catch (error) {
    console.error("Error in getting posts for feed:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id; // logged-in user

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // check if the post belongs to the authenticated user
    if (!post.user.equals(userId)) {
      return res
        .status(400)
        .json({ message: "You are not authorized to delete this post" });
    }

    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
};

export const signleUserPosts = async (req, res) => {
  const userId = req.params.id;
  try {
    const userPosts = await Post.find({ user: userId }).populate(
      "user",
      "username"
    );
    res.status(200).json({ message: "Fetched user posts ", userPosts });
    // console.log(userPosts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
