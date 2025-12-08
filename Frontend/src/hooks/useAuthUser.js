import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../api/authApi";

export const useAuthUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getAuthUser,
    retry: false,
  });
};
