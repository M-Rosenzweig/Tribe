import React, {useEffect, useState} from 'react'
import MembersBarCard from '../components/MembersBarCard'
import UserBarCard from '../components/UserBarCard'
import ChatMessage from '../components/ChatMessage'
import ChatFeelingCard from '../components/ChatFeelingCard'
import {BiSend} from 'react-icons/bi'


import "./Chat.css"


function Chat({user, tribes}) {

  const [tribeMembers, setTribeMembers] = useState([])
  const [tribeName, setTribeName] = useState('')
  const [userPriorities, setUserPriorites] = useState([])
  const [userWorries, setUserWorries] = useState([])
  const [show, setShow] = useState(true)
  const [memberID, setMemberID] = useState(user.id)
  const [memberName, setMemberName] = useState(user.username)
  const [energy, setEnergy] = useState('')


  

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

    function handleShowToggle() {
      setShow(!show)
    }

  return (
    <div className='chatMaster' >

      <div className='ChatMain' >

        <div className='MessagesArea'>
          <ChatMessage/>
        </div>

        <div className='ChatInputArea'>
          <button className='AddMedia'>+</button>
           <input className='ChatInputBox' placeholder='type a messge'></input>
           <button className='ChatSendMessage'><BiSend/></button>

        </div>

      </div>

      <div className='MembersRow'>
        {user.energy !== '' && <UserBarCard handleSetMemberName={handleSetMemberName} handleSetMemberID={handleSetMemberID} member={user} />}

        {tribeMembers.filter(member => member.id !== user.id)
        .map(member => <MembersBarCard handleSetMemberName={handleSetMemberName} handleSetMemberID={handleSetMemberID} key={member.id} member={member}/>)}

      </div>

      <div className='ChatSideDeets' >
        <h1>{memberName} {memberName == user.username ? <button className='sideDeetsEnergy'>energy</button> : null}</h1>
         {show ?  mappedPriorities : mappedWorries }

      </div>

      <div className='ToggleSection'>
          <button onClick={handleShowToggle} className='ToggleDeets'>{show ? "Priorites" : "Worries"}</button>
      </div>

      <div className='ChatVibes1'>
          <h1>{tribeName}</h1>
      </div>



    </div>
  )
}

export default Chat