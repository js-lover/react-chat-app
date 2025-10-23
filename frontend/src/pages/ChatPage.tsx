import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import send from "/send.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useParams } from "react-router-dom";
import Header from "../components/Header"


const socket = io("http://localhost:8000");

interface Message {
  message: string;
  senderId?: string;
}



const ChatPage = () => {
  const { id } = useParams(); // /chat/:id → odayı buradan alıyoruz
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (id) {
      socket.emit("join_room", id);
    }
  }, [id]);

  var date = new Date();

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [
        ...prev,
        { message: data.message, senderId: data.senderId },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "" && id) {
      const newMessage = { message, roomId: id, senderId: socket.id };

      socket.emit("send_message", newMessage);
      //setMessages((prev) => [...prev, { message, senderId: socket.id }]);
      setMessage("");
    }
  };

  return (
    <div className="w-screen pt-16 h-screen relative flex flex-col justify-start items-start bg-sky-100">
      
      <Header header="chat" isAvatarVisible={true}/>

      <div className=" w-full h-full flex flex-col justify-start items-center overflow-auto">
        {messages.map((msg, index) => (
          <div
            className={`mt-2 ml-2  p-2 border-black w-9/10 h-fit  ${
              msg.senderId === socket.id
                ? "bg-green-500 rounded-xl rounded-br-none"
                : "bg-blue-500 rounded-xl rounded-bl-none"
            }`}
          >
            <div className=" w-full h-fit mb-2">
              <p className="text-white text-sm">{msg.message}</p>
            </div>

            <div className="flex flex-col  w-full h-fit justify-end items-end ">
              <h4 className="text-white text-xs opacity-60">
                {date.getHours()} : {date.getMinutes()}{" "}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-16 relative bottom-0 left-0 flex flex-row justify-center  mb-4 items-center p-2">
        <div className="w-full h-fit flex flex-row justify-start gap-2 items-start  ">
          <Input
            type="text"
            placeholder="Type your message here..."
            className="w-full"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <Button
            className="mt-0 bg-green-500 border-0"
            onClick={sendMessage}
            variant={"outline"}
          >
            <img src={send} className="w-5 h-5" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
