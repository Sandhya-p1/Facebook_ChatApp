import { create } from "zustand";
import { useSocketStore } from "./useSocketStore";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
  selectedUser: null,
  messages: [],
  isMessageLoading: false,

  setSelectedUser: (selectedUser) => set({ selectedUser, messages: [] }),

  getMessages: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const res = await axiosInstance.get(`messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeMessage: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;
    const socket = useSocketStore.getState().socket;

    socket.on("newMessage", (newMessage) => {
      if (newMessage.senderId !== selectedUser._id) return;
      // set({ messages: [...get().messages, newMessage] });
      set((state) => ({ messages: [...state.messages, newMessage] }));
    });
  },
  unSubscribeMessage: () => {
    const socket = useSocketStore.getState().socket;
    if (!socket) return;
    socket.off("newMessage");
  },
}));
