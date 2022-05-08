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
  const [energy, setEnergy] = useState(user.energy)




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

  return (
    <div className='chatMaster' >

      <div className='ChatMain' >

        <div className='MessagesArea'>
          {/*
           Ok Lets just think through how a chat works in my own words and then get to 
           work on creating it. 

           This tribe has an array of messages. These messages belong to different users. 
           we want to call all of the created messages in order of their creation and mapped them into the ChatMessage Component. 

           When we create a new message that changes the web socket and it knows to do another fetch to give the new information and places it in order
           

           */}
          <ChatMessage/>
        </div>

        <div className='ChatInputArea'>
          <button className='AddMedia'>+</button>
           <input className='ChatInputBox' placeholder='type a messge'></input>
           <button className='ChatSendMessage'><BiSend/></button>

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



    </div>
  )
}

export default Chat