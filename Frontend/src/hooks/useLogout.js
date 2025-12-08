import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../api/authApi";
import { useSocketStore } from "../zustandStore/useSocketStore";

export const useLogOut = () => {
  const { disconnectSocket } = useSocketStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      disconnectSocket();
      queryClient.setQueryData(["user"], null);
    },
  });
};
