import { Image, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { usePostStore } from "../src/zustandStore/usePostStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/postApi";
import { useAuthUser } from "../hooks/useAuthUser";

const CreatePost = ({ close }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (prevPosts = []) => [
        newPost,
        ...prevPosts,
      ]);
      toast.success("Posted");
      setCaption("");
      setImage(null);
      close();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to post");
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "facebook_posts");

    try {
      const res = await fetch(
        "http://api.cloudinary.com/v1_1/dm5qalis2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
    } catch (error) {
      toast.error("Image upload failed");
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!caption.trim() && !image)
      return toast.error("Please enter something or select image to post");
    mutation.mutate({ caption, image });
  };

  const { data: authUser } = useAuthUser();

  return (
    <form
      onSubmit={handlePost}
      className="flex flex-col relative gap-2 rounded-xl bg-neutral-700 z-50 h-[500px] w-[450px]"
    >
      <div className="flex justify-between p-4">
        <p></p>
        <p className="text-xl font-semibold">Create Post</p>
        <X size={26} className="cursor-pointer" onClick={close} />
      </div>
      <hr className="text-gray-500" />

      {/* post section */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center space-x-2">
          <img src="" className="h-10 w-10 rounded-full bg-white" />
          <p className="text-lg font-semibold uppercase">
            {authUser?.fullName}
          </p>
        </div>
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder={`What's on your mind, ${authUser?.fullName}?`}
          className="flex-1 w-full border-none outline-none"
        />
        {image && <img src={image} className="w-full h-40 object-cover" />}
      </div>

      {/* footer */}
      <div className="absolute bottom-2 flex flex-col w-full p-4 gap-4">
        <label className="cursor-pointer flex justify-between items-center w-full border border-gray-500 rounded-2xl p-3">
          <p className="text-sm font-semibold">Add to your post</p>
          <input type="file" className="hidden" onChange={handleImageChange} />
          <Image className="text-green-600" />
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl font-semibold transition-all duration-200 ease-linear hover:bg-blue-500 bg-neutral-600 p-3 cursor-pointer"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
