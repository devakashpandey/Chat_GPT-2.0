import React from "react";

const ChatBody = () => {
  const aistyle = "bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md";
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Client message */}
        <div
          className="border-[#999999] break-words border-2 rounded-xl self-end
        px-3 max-w-[80%] py-3"
        >
          <pre className="">
            <span>hii chat gpt can you help me</span>
          </pre>
        </div>

        {/* AI response  */}
        <div
          className={`border-[#999999] break-words border-2 rounded-xl self-start
        px-3 max-w-[80%] py-3 ${aistyle}`}
        >
          <pre>
            <span>yes, i can help you</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
