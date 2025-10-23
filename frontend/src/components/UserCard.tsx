import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

interface UserCardProps {
  id: number;
  name: string;
  onclick?: () => void;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div
      
      className="w-full h-fit xl:w-full xl:h-fit xl:py-2 xl:rounded-lg  xl:bg-gray-800 xl:hover:bg-gray-900 bg-indigo-700 flex justify-between items-center cursor-pointer hover:bg-indigo-900 xl:transition xl:duration-300"
      onClick={props.onclick}
    >
      <div>
        <Avatar className="w-15 h-15 ml-5 ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-70 xl:w-180 h-full flex flex-col justify-center items-start ml-2  pt-2 ">
        <h1 className="text-white text-sm font-bold  ">{props.name}</h1>
      </div>
    </div>
  );
};

export default UserCard;
