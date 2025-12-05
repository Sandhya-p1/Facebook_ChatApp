const ChatBox = () => {
  return (
    <div className="flex flex-col relative rounded-lg bg-neutral-900 w-[380px] h-[500px]">
      <nav className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-1.5">
          <img src="" className="h-8 w-8 rounded-full bg-white" />
          <p className="text-sm font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-1.5">
          <Ellipsis size={16} />
          <X size={20} />
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
  );
};

export default ChatBox;
