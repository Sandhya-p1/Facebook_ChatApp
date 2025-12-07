import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";
import toast from "react-hot-toast";
import { create } from "zustand";
export const useChatStore = create((set, get) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),

  // messages: [],
  // users: [],
  // isUsersLoading: false,
  // isMessageLoading: false,

  // getUsers: async () => {
  //   set({ isUsersLoading: true });
  //   try {
  //     const res = await axiosInstance.get("/messages/getUsers");
  //     set({ users: res.data });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isUsersLoading: false });
  //   }
  // },

  // getMessages: async (userId) => {
  //   set({ isMessageLoading: true });
  //   try {
  //     const res = await axiosInstance.get(`messages/${userId}`);
  //     set({ messages: res.data });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isMessageLoading: false });
  //   }
  // },

  // sendMessages: async (messageData) => {
  //   const { selectedUser, messages } = get();
  //   try {
  //     const res = await axiosInstance.post(
  //       `/messages/send/${selectedUser._id}`,
  //       messageData
  //     );
  //     set({ messages: [...messages, res.data] });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // },

  subscribeMessage: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;
    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", (newMessage) => {
      if (newMessage.senderId !== selectedUser._id) return;
      set({ messages: [...get().messages, newMessage] });
    });
  },
  unSubscribeMessage: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },
}));
