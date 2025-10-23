import React, { useEffect, useState } from "react";

import { Header, UserCard } from "../components/index.tsx";

import { Link, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import chat from "../assets/animations/chat.json";

interface Room {
  id: number;
  name: string;
}

const HomePage = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/rooms.json");
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.log("Hata:", err);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="w-full  h-full xl:h-full   flex flex-row xl:flex xl:flex-row xl:pt-16  justify-center xl:items-center xl:justify-center   items-start bg-black">
      <Header header="Home" isAvatarVisible={true} />

      <div style={{backgroundColor:"#4369fd"}} className=" w-full  md:w-10/12 xl:mt-10 xl:pt-10 xl:pb-10 xl:mb-0 h-full xl:h-screen  mt-16   pt-0  flex flex-col justify-start xl:justify-center  xl:bg-neutral-900  xl:items-center xl:rounded-xl  xl:px-5 items-center gap-0 xl:gap-2 ">
        {rooms.map((room) => (
          <Link to={`/chat/${room.id}`} key={room.id}>
            <UserCard key={room.id} name={room.name} id={room.id} />
          </Link>
        ))}
      </div>

      <div className="w-200 h-full hidden justify-center items-center xl:flex  ">
        <Lottie className=" w-full" animationData={chat} />
      </div>

      <div></div>
    </div>
  );
};

export default HomePage;
