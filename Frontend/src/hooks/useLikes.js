import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLikes } from "../api/likesCommentsApi";

export const useLikes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLikes,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
