import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserCardProps {
    id:number;
    name: string;
    onclick?: () => void;

}


const UserCard = (props: UserCardProps) => {
  return (
    <div className='w-full h-18 bg-indigo-800  flex justify-between items-center cursor-pointer hover:bg-indigo-900' onClick={props.onclick} >
        
        <div>
            <Avatar className='w-15 h-15 ml-5 '>
  <AvatarImage  src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>

        <div className='w-70 h-full flex flex-col justify-center items-start ml-2  pt-2 '>
            <h1 className='text-white text-sm font-bold  '>{props.name}</h1>
            <p className='text-white text-xs border-solid w-full pr-2 h-full truncate font-extralight'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio reiciendis quod atque quae facilis exercitationem eius debitis beatae delectus hic, libero expedita eligendi neque similique. At a non nostrum aliquam.</p>
        </div>
        
        
    </div>
  )
}

export default UserCard