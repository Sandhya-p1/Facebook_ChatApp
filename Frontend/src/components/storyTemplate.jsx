import React from "react";

const StoryTemplate = () => {
  return (
    <div className="rounded-md shrink-0  h-40 w-24 bg-gray-900 relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        className="h-8 w-8 rounded-full bg-white absolute top-2 left-2"
      />
      <p className="text-xs text-white font-semibold text-center absolute bottom-2 left-0 right-0">
        Sandhya Pandey
      </p>
    </div>
  );
};

export default StoryTemplate;
