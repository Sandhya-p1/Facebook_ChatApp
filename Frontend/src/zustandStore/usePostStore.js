import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const usePostStore = create((set, get) => ({
  posts: [],
  isPostsLoading: false,

  getPosts: async () => {
    set({ isPostsLoading: true });
    try {
      const res = await axiosInstance.get("/posts/getPosts");
      set({ posts: res.data.reverse() });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isPostsLoading: false });
    }
  },

  addPost: async (caption) => {
    const { posts } = get();
    try {
      const res = await axiosInstance.post("/posts/posting", caption);
      set({ posts: [...posts, res.data] });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to post");
    }
  },
}));
