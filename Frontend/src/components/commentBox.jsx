import { MessageCircle } from "lucide-react";
import React, { useState } from "react";

const CommentBox = () => {
  const [showCmtBox, setShowCmtBox] = useState(false);
  return (
    <>
      <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1 transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
        <MessageCircle size={20} />
        <p onClick={() => setShowCmtBox(!showCmtBox)}>Comment</p>
      </div>
      {showCmtBox && (
        <div>
          <input type="text" />
        </div>
      )}
    </>
  );
};

export default CommentBox;
