import { axiosInstance } from "../lib/axios";

export const getAuthUser = async () => {
  const res = await axiosInstance.get("/auth/checkAuth");
  return res.data;
};

export const signup = async (data) => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

export const login = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);
  console.log("Login response:", res.data);
  return res.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};
