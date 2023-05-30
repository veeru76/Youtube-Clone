import React from 'react';
import user from "./user.png"

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex flex-row gap-4 shadow-sm p-2 items-center'>
       <img src={user} alt='pod' className='h-6 w-6'/>
        <h3>{name}</h3>
      <p>{message}</p>
    </div>
  )
}

export default ChatMessage