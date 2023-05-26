import React from "react";
import sendIcon from "../../assets/send.png";

const UserInput = () => {
  return (
    <>
      <div
        className="w-full bg-white bg-opacity-10 max-h-40 py-4
      rounded-lg overflow-hidden relative"
      >
        {/* <textarea
          rows={1}
          className="border-0 bg-transparent outline-none w-[90%] px-5"
        /> */}
        <input className="border-0 bg-transparent outline-none w-[90%] px-5" />

        <img
          src={sendIcon}
          width={20}
          alt="sendIcon"
          className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100
          hover:scale-125"
        />
      </div>
    </>
  );
};

export default UserInput;
