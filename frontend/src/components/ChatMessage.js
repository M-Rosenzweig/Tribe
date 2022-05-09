import React, {useState} from 'react'
import "./ChatMessage.css"


function ChatMessage({text, username, userID, messageUserID, time}) {
  const [chatClassName] = useState(messageUserID !== userID ? "ChatMessageItem" : "UserChatMessageItem")
 
  // let x = time.split("T")[1].split(".")[0];
  
  return (
    <>
    <div className={chatClassName}>
     <p className='ChatMessageUsername'>{username}</p>
      <div className='ChatMessageDetails'>
        {text}
      {/* <div className='MessageTime'>{x}</div>  */}
      </div>
    </div>
    </>
 
  )
}

export default ChatMessage