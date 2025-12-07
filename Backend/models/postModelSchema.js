import mongoose, { Mongoose } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
    },

    image: {
      type: String,
    },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    commentedBy: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },

  {
    timestamp: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
