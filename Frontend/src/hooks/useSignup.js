import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../api/authApi";

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
};
