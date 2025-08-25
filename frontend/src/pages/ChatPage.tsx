import React from 'react'
import { MessageInputComponent } from '@/components'

const ChatPage = () => {
  return (
    <div className='w-screen border-1 border-white h-screen relative flex flex-col justify-center items-start bg-black'>

      
      <div className='w-full h-16 absolute bottom-0 left-0 flex flex-row justify-center items-center bg-black border-t-2 border-red-500 p-4'>
        <MessageInputComponent />
      </div>


    </div>
  )
}

export default ChatPage