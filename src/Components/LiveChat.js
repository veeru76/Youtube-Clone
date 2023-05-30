import React, { useEffect } from 'react'
import user from './user.png'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { addNameGenerator } from '../utils/helpers';
import {idGenerator} from "../utils/helpers"
//const chatMessages = [{}]
const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            console.log("API polling");
            dispatch(addMessages({
                name : addNameGenerator(),
                message : idGenerator('youtube_div_')
             } ))
        }, 2500)

        return (() => clearInterval(i))
    })
  return (
    <div className='w-full h-[360px] border border-black bg-slate-100 rounded p-2 flex flex-col-reverse gap-4 overflow-y-scroll'>
        {chatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
      
        </div>
  )
}

export default LiveChat