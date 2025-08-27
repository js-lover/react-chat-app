import React from "react";
import { MessageInputComponent } from "@/components";

const ChatPage = () => {
  return (
    <div className="w-screen border-1 border-white h-screen relative flex flex-col justify-center items-start bg-black">
      <div className=" w-full h-full border-5 overflow-auto border-green-600">
       
       
        <div className="mt-2 ml-2 bg-sky-700 p-2 border-black w-3/4 h-fit rounded-xl rounded-bl-none">
          <div className=" w-full h-fit mb-2">
            <p className="text-white text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              
              consequatur nesciunt cupiditate et.
            </p>
          </div>

          <div className="flex flex-col  w-full h-fit justify-end items-end ">
            <h1 className="text-white text-sm opacity-60">Baris Aydin</h1>
            <h4 className="text-white text-xs opacity-60">19:05</h4>
          </div>
        </div>


       









      </div>

      <div className="w-full h-16 relative bottom-0 left-0 flex flex-row justify-center items-center bg-black border-t-2 border-red-500 p-4">
        <MessageInputComponent />
      </div>
    </div>
  );
};

export default ChatPage;
