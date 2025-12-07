import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

export const getAuthUser = async () => {
  const res = await axiosInstance.get("/auth/checkAuth");
  return res.data;
};

const useAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    initialData: () => {
      const user = localStorage.getItem("authUser");
      return user ? JSON.parse(user) : null;
    },
  });
};
export default useAuthUser;

export const signup = async (data) => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

export const login = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};
