import { axiosInstance } from "../lib/axios";

export const getUsers = async () => {
  const res = await axiosInstance.get("/users/allUsers");
  return res.data;
};

// export const getMessages = async (userId) => {
//   const res = await axiosInstance.get(`messages/${userId}`);
//   return res.data;
// };
// export const sendMessages = async (userId, messageData) => {
//   const res = await axiosInstance.post(`/messages/send/${userId}`, messageData);
//   return res.data;
// };
