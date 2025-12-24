import { axiosInstance } from "../lib/axios";

export const fetchPosts = async () => {
  const res = await axiosInstance.get("/posts/getPosts");
  return res.data.reverse();
};

export const createPost = async ({ caption, image }) => {
  const res = await axiosInstance.post("/posts/posting", { caption, image });
  return res.data.newPost;
};

export const deletingPost = async (postId) => {
  const res = await axiosInstance.delete(`/posts/deletePost/${postId}`);
  return res.data;
};
