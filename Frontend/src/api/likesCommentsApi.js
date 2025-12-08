import { axiosInstance } from "../lib/axios";

export const postLikes = async (postId) => {
  if (!postId) throw new Error("postId is missing");
  const res = await axiosInstance.post(`/likesComments/likes/${postId}`, {});
  return res.data;
};

export const postComment = async (postId, text) => {
  const res = await axiosInstance.post(`/likesComments/comment/${postId}`, {
    text,
  });
  return res.data;
};

export const getComments = async (postId) => {
  const res = await axiosInstance.get(`/likesComments/getComment/${postId}`);
  return res.data;
};
