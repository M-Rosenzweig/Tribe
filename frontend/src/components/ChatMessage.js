import React, {useState} from 'react'
import "./ChatMessage.css"


function ChatMessage({text, username, userID, messageUserID}) {
  const [chatClassName, setChatClassName] = useState(messageUserID !== userID ? "ChatMessageItem" : "UserChatMessageItem")
  // console.log(userID);
  // console.log(messageUserID);
  return (
    <>
    <div className={chatClassName}>
     <p className='ChatMessageUsername'>{username}</p>
      <div className='ChatMessageDetails'>
        {text}
      {/* <div className='MessageTime'>11:34</div>  */}
      </div>
    </div>
    </>
 
  )
}

export default ChatMessage