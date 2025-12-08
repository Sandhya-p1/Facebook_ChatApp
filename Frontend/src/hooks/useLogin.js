import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useSocketStore } from "../zustandStore/useSocketStore";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { connecSocket } = useSocketStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      // queryClient.invalidateQueries(["user"]);
      connecSocket(data._id);
      navigate("/", { replace: true });
    },
  });
};
