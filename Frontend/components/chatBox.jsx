import { Ellipsis, Images, Mic, Sticker, ThumbsUp, X } from "lucide-react";
import { useChatStore } from "../src/zustandStore/useChatStore";
import { useEffect, useState } from "react";

const ChatBox = () => {
  const { selectedUser, setSelectedUser } = useChatStore();

  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    setShowChatBox(!!selectedUser);
  }, [selectedUser]);

  if (!showChatBox) return null;

  return (
    <>
      {showChatBox && (
        <div className="flex flex-col relative rounded-lg bg-neutral-900 w-[350px] h-[450px]">
          <nav className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-1.5">
              <img src="" className="h-8 w-8 rounded-full bg-white" />
              <p className="text-sm font-semibold">{selectedUser?.fullName}</p>
            </div>
            <div className="flex items-center space-x-1.5">
              <Ellipsis size={16} />
              <X
                size={20}
                onClick={() => setSelectedUser(null)}
                className="cursor-pointer"
              />
            </div>
          </nav>
          <hr className="text-gray-500" />

          {/* conversations section */}
          <div className="flex-1 overflow-scroll no-scrollbar smooth-scroll p-4 flex-col flex gap-4 items-end ">
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
            <p className="bg-blue-500 text-white p-2 w-30 rounded-xl ">
              hello world
            </p>
          </div>

          {/* footer */}
          <div className="p-3 flex space-x-2 items-center justify-evenly text-blue-500 ">
            <Mic fill="blue" />
            <Images />
            <Sticker />
            <input
              type="text"
              placeholder="Aa"
              className="p-2 bg-neutral-700 text-white text-sm placeholder:font-semibold border-none outline-none rounded-4xl"
            />
            <ThumbsUp />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
