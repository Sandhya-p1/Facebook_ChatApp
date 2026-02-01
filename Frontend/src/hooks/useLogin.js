import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useSocketStore } from "../zustandStore/useSocketStore";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { connecSocket } = useSocketStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      try {
        queryClient.setQueryData(["user"], data);

        connecSocket(data._id);
        navigate("/", { replace: true });
      } catch (err) {
        console.error("Post-login error:", err);
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "Login Failed");
    },
  });
};
