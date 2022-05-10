import React, {useState} from 'react'
import "./ChatMessage.css"


function ChatMessage({text, username, userID, messageUserID, time}) {
  const [chatClassName] = useState(messageUserID !== userID ? "ChatMessageItem" : "UserChatMessageItem")
 
  let x = time.split("T")[1].split(".")[0];
  
  return (
    <>

    <div className={chatClassName}>
      <div id='ChatUsername' className='MessageDetails'>
        <div> {username}</div> <div>  {x} </div>  
      </div>
      <div className='ChatTextDetails'> 
        {text}
      </div>
    </div>



{/* 
     <div className={chatClassName}>
      {/* <div className='MessageTime'>{x}</div>  */}
     {/* <p className='ChatMessageUsername'>{username}</p>

    <div className='ChatMessageDetails'>
        {text}
      </div>
     </div>  */}


    </>
 
  )
}

export default ChatMessage