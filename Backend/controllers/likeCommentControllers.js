import Post from "../models/postModelSchema.js";

export const postLikes = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.json({ message: "Post is not found" });

    const isLiked = post.likedBy.some((id) => id.equals(userId));
    if (isLiked) {
      post.likedBy = post.likedBy.filter((id) => !id.equals(userId));
    } else {
      post.likedBy.push(userId);
    }
    await post.save();
    res.json({
      liked: !isLiked,
      likedBy: post.likedBy,
      totalLikes: post.likedBy.length,
      messaege: !isLiked ? "Liked" : "UnLiked",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const postComment = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user._id;
  const { text } = req.body;

  try {
    if (!text.trim())
      return res.json({ message: "write something to add comment" });
    const post = await Post.findById(postId);
    if (!post) return res.json({ message: "No post is available" });

    const comment = {
      user: userId,
      text,
    };
    post.commentedBy.push(comment);
    await post.save();
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId)
      .populate("commentedBy.user", "userName")
      .lean();
    if (!post) return res.json("Post is not found");
    res.status(201).json(post.commentedBy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
