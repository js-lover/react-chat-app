import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"


interface headerProps {
    header: string
    isAvatarVisible: boolean
  }
  



const Header = (props:headerProps) => {
  

  
  
  return (
    
    <div id='header' className='w-full fixed top-0 left-0 z-50  h-16 bg-violet-400 flex justify-start items-center shadow-2xl font-bold font-stretch-80% '>
        <Avatar className={`w-15 h-15  ml-5 ${ props.isAvatarVisible ? "flex" : "hidden" }`}>
  <AvatarImage  src="https://avatar.iran.liara.run/public/38" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        <h1 className='text-white text-2xl ml-5'>{props.header}</h1>
    </div>


  )
}

export default Header