import { create } from "zustand";
import { io } from "socket.io-client";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:8000" : "/";

export const useSocketStore = create((set, get) => ({
  socket: null,
  onlineUsers: [],

  connectSocket: (userId) => {
    if (get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: { userId },
    });

    socket.connect();

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
    set({ socket });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
    set({ socket: null, onlineUsers: [] });
  },
}));
