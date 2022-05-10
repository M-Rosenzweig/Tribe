import React, {useEffect, useState} from 'react'
import MembersBarCard from '../components/MembersBarCard'
import UserBarCard from '../components/UserBarCard'
import ChatMessage from '../components/ChatMessage'
import ChatFeelingCard from '../components/ChatFeelingCard'
import ChatWebSocket from "../ChatWebSocket";

import {BiSend} from 'react-icons/bi'


import "./Chat.css"


function Chat({user, tribes, cableApp}) {

  const [tribeMembers, setTribeMembers] = useState([])
  const [tribeName, setTribeName] = useState('')
  const [userPriorities, setUserPriorites] = useState([])
  const [userWorries, setUserWorries] = useState([])
  const [show, setShow] = useState(true)
  const [memberID, setMemberID] = useState(user.id)
  const [memberName, setMemberName] = useState(user.username)
  const [energy, setEnergy] = useState(user.energy)
  const [tribeMessages, setTribeMessages] = useState([])
  const [messageText, setMessageText] = useState('')
  const [checkMessages, setCheckMessages] = useState(false)

let userID = user.id
// console.log(tribes[0].id);
// console.log(tribeMembers)

let broadcastObject = {
  room: tribes[0].id, 
  users: tribeMembers, 
  messages: tribeMessages
} 

// console.log(tribes[0].id);
// console.log(tribeMembers);

  function handleSetMemberID(id) {
    setMemberID(id)
  }

  function handleSetMemberName(name) {
    setMemberName(name)
  }

  useEffect(() => {
    // getting the users worries from backend and setting it to state
    fetch(`/user_worries/${memberID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
         setUserWorries(data)
        })
      }
    });
  },[memberID]);

  useEffect(() => {
    // getting the users priorites from backend and setting it to state
    fetch(`/user_priorities/${memberID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
         setUserPriorites(data)
        })
      }
    });
  },[memberID]);

  useEffect(() => {
    // getting the users current energy from backend
    fetch(`/energy/${memberID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((energyData) => {
         setEnergy(energyData)
        })
      }
    });
  },[]);

  let MappedMessages = tribeMessages.map(m => {
    // console.log(m.created_at);
    return (
      <ChatMessage 
      key={m.id}
      time={m.created_at}
      text={m.text}
      username={m.user.username}
      messageUserID={m.user.id}
      userID ={user.id}
      />
    )
  })
  // {tribeMembers.filter(member => member.id !== user.id)
  //   .map(member => <MemberCard key={member.id} member={member}/>)}
  let mappedPriorities = userPriorities.map(pri => {
    //  console.log(p)
     return (
       <ChatFeelingCard
       key={pri.id}
       text={pri.text}
       id={pri.id}
       />
     )
   })

   let mappedWorries = userWorries.map(w => {
    return (
       <ChatFeelingCard
       key={w.id}
       text={w.text}
       id={w.id}
    />
    )
  })

  // console.log(checkMessages);

  useEffect(() => {
    if (tribes[0]){
      fetchAndPopulate(tribes[0].id)
      fetchAndPopulateMessages(tribes[0].id)
      setTribeName(tribes[0].name)
      // setTribeMessages(tribes[0])
    }
  }, [checkMessages]) 
  // when current tribe changes then this needs to change to acomadate the new tribe id fetch 
  function fetchAndPopulateMessages(TribeId) {
    fetch("/messages/" + TribeId)
    .then(resp => resp.json())
    .then(data => {
      setTribeMessages(data)
      // console.log(data);
    })
  }
  
  function fetchAndPopulate(TribeId){
    fetch("/s_tribes/" + TribeId)
    .then(resp => resp.json())
    .then(data => {
      setTribeMembers(data.users)
      // console.log(data.users) 
    })
  }

    function handleShowToggle() {
      setShow(!show)
    }

    function toggleTheUserEnergy() {
      fetch(`/update/${memberID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        }, 
      });

      if (energy === 1) {
        setEnergy(energy + 1) 
      } else if (energy === 2) {
        setEnergy(energy + 1)
      } else if (energy === 3) {
        setEnergy(energy + 1)
      } else if (energy === 4) {
        setEnergy(1)
      }
    }

    function handleNewMessageState(e) {
      setMessageText(e.target.value)
      // console.log(messageText);
    }

    function createNewMessage(e) {
      e.preventDefault()
      console.log(checkMessages);
      setMessageText('')

      fetch("/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: user.id,
          text: messageText, 
          bond_id: user.bonds[0].id
        })
      }).then(resp => resp.json())
      .then(data =>  {
       setCheckMessages(!checkMessages)
        console.log(data)})
    }

  return (
    <div className='chatMaster' >

      <div className='ChatMain' >

        <div className='MessagesArea'>
          {MappedMessages}
          {/*
           When we create a new message that changes the web socket and it knows to do another fetch to give the new information and places it in order
           

           */}
          {/* <ChatMessage/> */}
        </div>

        <div className='ChatInputArea'>
          <form className='ChatInput' onSubmit={createNewMessage}>
            <button className='AddMedia'>+</button>
            <input className='ChatInputBox' placeholder='type a messge' value={messageText} onChange={handleNewMessageState}></input>
            <button className='ChatSendMessage'><BiSend/></button>
          </form>
     

        </div>

      </div>

      <div className='MembersRow'>

        {tribeMembers.filter(member => member.id !== user.id)
        .map(member => <MembersBarCard handleSetMemberName={handleSetMemberName} handleSetMemberID={handleSetMemberID} key={member.id} member={member}/>)}

       {user.energy !== '' && <UserBarCard handleSetMemberName={handleSetMemberName} handleSetMemberID={handleSetMemberID} member={user} energy={energy} />}

      </div>

      <div className='ChatSideDeets' >
        <h1 className='ChatSideDeetsMemberName'>{memberName}</h1>
        {memberName == user.username ? <button onClick={toggleTheUserEnergy} className='sideDeetsEnergy'>energy</button> : null}
         {show ?  mappedPriorities : mappedWorries }

      </div>

      <div className='ToggleSection'>
          <button onClick={handleShowToggle}className='ToggleDeets'>{show ? "Priorites" : "Worries"}</button>
      </div>

      <div className='ChatVibes1'>
          <h1>{tribeName}</h1>
      </div>


      <ChatWebSocket userID={userID} broadcastObject={broadcastObject} cableApp={cableApp} />
    
      

    </div>
  )
}

export default Chat