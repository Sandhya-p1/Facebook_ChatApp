import { axiosInstance } from "../lib/axios";

export const fetchPosts = async () => {
  const res = await axiosInstance.get("/posts/getPosts");
  return res.data.reverse();
};

export const createPost = async (caption) => {
  const res = await axiosInstance.post("/posts/posting", { caption });
  return res.data.newPost;
};
