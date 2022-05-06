import React, {useEffect, useState} from 'react'
import MembersBarCard from '../components/MembersBarCard'
import ChatMessage from '../components/ChatMessage'
import {BiSend} from 'react-icons/bi'


import "./Chat.css"


function Chat({user, tribes}) {

  const [tribeMembers, setTribeMembers] = useState([])
  const [tribeName, setTribeName] = useState('')

  useEffect(() => {
    if (tribes[0]){
      fetchAndPopulate(tribes[0].id)
      setTribeName(tribes[0].name)
    }
  }, [tribes])

  
  function fetchAndPopulate(TribeId){
    fetch("/s_tribes/" + TribeId)
    .then(resp => resp.json())
    .then(data => {
      setTribeMembers(data.users)
      // console.log(data.users) 
    })
  }

  // console.log(tribeName);

  return (
    <div className='chatMaster' >

      <div className='ChatMain' >

        <div className='MessagesArea'>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
        </div>

        <div className='ChatInputArea'>
          <button className='AddMedia'>+</button>
           <input className='ChatInputBox' placeholder='type a messge'></input>
           <button className='ChatSendMessage'><BiSend/></button>

        </div>
     
      {/* {user.energy !== '' && <MembersBarCard member={user} />}
      {user.energy !== '' && <MembersBarCard member={user} />}
      {user.energy !== '' && <MembersBarCard member={user} />} */}

    
      </div>

      <div className='MembersRow'>
        {/* < MembersBarCard /> */}
        {user.energy !== '' && <MembersBarCard member={user} />}

        {tribeMembers.filter(member => member.id !== user.id)
        .map(member => <MembersBarCard key={member.id} member={member}/>)}

      </div>

      <div className='ChatSideDeets' >
         <h1> {user.username ? user.username : ''}</h1> 
         <h4  className='FeelingCard'> - testing 123</h4>
      </div>

      <div className='ToggleSection'>
          <button className='ToggleDeets'>Priorities</button>
      </div>

      <div className='ChatVibes1'>
          <h1>Tribe Name</h1>
      </div>



    </div>
  )
}

export default Chat