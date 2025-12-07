import { Ellipsis, Loader, Search } from "lucide-react";
import React, { useEffect } from "react";
import { useChatStore } from "../src/zustandStore/useChatStore";
// import { useAuthStore } from "../src/zustandStore/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../src/api/usersChatApi";

const RightSidebar = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const { selectedUser, setSelectedUser } = useChatStore();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  // const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } =
  //   useChatStore();
  // const { onlineUsers } = useAuthStore();

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // if (isUsersLoading) return <Loader className="animate-spin" />;

  return (
    <div className="p-6 flex flex-col gap-10">
      <div className="flex justify-between  items-center text-gray-400">
        <h1 className="text-xl font-semibold ">Contacts</h1>
        <div className="flex items-center gap-3">
          <Search />
          <Ellipsis />
        </div>
      </div>

      {/* list of friends */}
      <div className="flex flex-col gap-2.5 py-6 text-gray-200 font-semibold">
        {users &&
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out
  ${selectedUser?._id === user._id ? "bg-blue-950" : ""}
      `}
            >
              <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
              <p>{user.fullName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RightSidebar;
