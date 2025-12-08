import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getComments, postComment } from "../api/likesCommentsApi";

export const usePostComments = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};

export const useGetComments = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getComments,
    retry: false,
  });
};
