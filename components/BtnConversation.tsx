import React from "react";
import { ButtonConversation } from "../types";

const BtnConversation = ({
  title,
  position = "justify-start",
  background = true,
}: ButtonConversation) => {
  return (
    <div className={`flex ${position}`}>
      <p
        className={`px-6 py-1.5 border bottom-2 rounded-full font-clash_display text-sm select-none ${
          background ? "bg-white text-black" : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default BtnConversation;
