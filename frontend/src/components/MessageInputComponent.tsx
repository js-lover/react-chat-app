import React, { useState } from 'react'

import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import sendMessage from '@/assets/icons/sendMessage.svg'

const MessageInputComponent = () => {

    const [text, setText] = useState("")


  return (
<div className='w-full h-fit flex flex-row justify-start gap-2 items-start gap-0 '>
        <Input
          type="text"
          placeholder="Type your message here..."
          className="w-full text-white "
          onChange={(e) => setText(e.target.value)}
        />

        <Button className="mt-0 bg-green-500 border-0" variant={'outline'} onClick={() => alert(text)}>
          
<img src={sendMessage} className='w-5 h-5' alt="" />


        </Button>



      </div>  )
}

export default MessageInputComponent