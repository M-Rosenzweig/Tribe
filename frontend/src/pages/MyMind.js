import React, { useState, useEffect } from 'react'
import "./MyMind.css"
import FeelingsCard from '../components/FeelingsCard'
import WorryCard from '../components/WorryCard'
import { v4 as uuidv4 } from "uuid";
import {BiSend} from 'react-icons/bi'


function MyMind({user, tribes}) {

  const [energy, setEnergy] = useState('')
  const [className, setClassName] = useState('EnergyButton')
  const [feeling, setFeeling] = useState('')
  const [tagline, setTagline] = useState('')
  const [priority, setPriority] = useState('')
  const [worry, setWorry] = useState('')
  const [userPriorities, setUserPriorites] = useState([])
  const [userWorries, setUserWorries] = useState([])
  


  // console.log(energy);
  let ID = user.id
  let tribeID = tribes[0].id

  
  useEffect(() => {
    // getting the users worries from backend and setting it to state
    fetch(`/user_worries/${ID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
         setUserWorries(data)
        })
      }
    });
  },[user]);

  useEffect(() => {
    // getting the users priorites from backend and setting it to state
    fetch(`/user_priorities/${ID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
         setUserPriorites(data)
        })
      }
    });
  },[user]);
  

  useEffect(() => {
    // getting the users current energy from backend
    fetch(`/energy/${ID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((energyData) => {
          // console.log(energyData)
         setEnergy(energyData)
        })
      }
    });
  },[user]);

  // setting state of what to display on the frontend for the users current energy level 
  useEffect(() => {
    if(energy === 1){
      setClassName("EnergyWeak")
      setFeeling('Weak')
      setTagline('I need help and am struggling')
    } else if(energy ===2) {
      setClassName("EnergyDecent")
      setFeeling('Decent')
      setTagline('I am feeling Decent but can use some attention from my tribe members')
    } else if(energy === 3){
      setClassName('EnergySolid')
      setFeeling('Solid')
      setTagline('I am feeling good about my priorities but am a bit worried')
    } else if(energy === 4){
      setClassName('EnergyAwesome')
      setFeeling('Awesome')
      setTagline('I feel confident - I got this')
    }
  },[energy])

  // changing the backend as well as the front end when a use toggles their energy 
  function handleEnergyShift() {
    fetch(`/update/${ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }, 
    })
    if (energy === 1) {
      setEnergy(energy + 1) 
      setFeeling("Decent")
    } else if (energy === 2) {
      setEnergy(energy + 1)
      setFeeling("Solid")
    } else if (energy === 3) {
      setEnergy(energy + 1)
      setFeeling('Awesome')
    } else if (energy === 4) {
      setEnergy(1)
      setFeeling('Weak')
    }
    
  }

  // setting state of the current priority that the user puts in 
  function handlePriority(e) {
    setPriority(e.target.value)
  }

  
 function handleWorry(e) {
  setWorry(e.target.value)
 }

  function uploadPriority(e) {
    let newPriority = {
      text: priority, 
      user_id: ID,
      s_tribe_id: tribeID
    }
    fetch(`/priorities`,  {
      method:"POST", 
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPriority),
    })
    .then(resp => resp.json())
    .then(newPriority => console.log(newPriority))
    setUserPriorites([...userPriorities, newPriority])
    setPriority('')
    e.preventDefault()
  }

  function uploadWorry(e) {
    let newWorry = {
      text: worry, 
      user_id: ID, 
      s_tribe_id: tribeID
    }
    fetch(`/worries`,  {
      method:"POST", 
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorry),
    })
    .then(resp => resp.json())
    .then(newWorry => console.log(newWorry))
    setUserWorries([...userWorries, newWorry])
    setWorry('')
    e.preventDefault()
    
  }

  function handlePrioritiesStateRefresh(ID) {
    // console.log(ID)
        fetch(`/user_priorities/${ID}`).then((resp) => {
          if (resp.ok) {
            resp.json().then((data) => {
             setUserPriorites(data)
            })
          }})
  }

  function handleFeelingDelete(id) {
    console.log(user.id);
    fetch(`/priorities/${id}`, {
          method: 'DELETE', 
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        handlePrioritiesStateRefresh(user.id)
  }

  function handleWorriesStateRefresh(id) {

    console.log(id)
    fetch(`/user_worries/${id}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
         setUserWorries(data)
        })
      }
    })
  }

  function handleWorryDelete(id) {
    fetch(`/worries/${id}`, {
      method: 'DELETE', 
    })
    .then(resp => resp.json())
    .then(data => console.log(data))

    handleWorriesStateRefresh(user.id)

  }


 let mappedPriorities = userPriorities.map(pri => {
  //  console.log(p)
   return (
     <FeelingsCard
     key={uuidv4()}
     text={pri.text}
     id={pri.id}
     handleFeelingDelete={handleFeelingDelete}
     />
   )
 })

 let mappedWorries = userWorries.map(w => {
   return (
      <WorryCard
      key={uuidv4()}
      text={w.text}
      id={w.id}
      handleWorryDelete={handleWorryDelete}
   />
   )
 })

  return (
    <div className='myMindMaster' >

      <div className='PrioritiesSection' >
        <h1 className='PrioritiesTitle'>My Priorities</h1>
        {mappedPriorities}
        <form onSubmit={uploadPriority}> 
        <input type="text" id='PriorityPlaceHolder' value={priority} onChange={handlePriority} className='PriorityInput' placeholder='type here' ></input>
        <button className='ClickPriority'><BiSend/></button>
        </form>
       

      </div>

      <div className='WorriesSection' > 
        <h1 className='WorriesTitle'>My Worries</h1>
        {mappedWorries}
        <form onSubmit={uploadWorry}>
        <input type="text" value={worry} onChange={handleWorry} className='PriorityInput' placeholder='type here'></input>
        <button className='ClickPriority'><BiSend/></button>
        </form>
      </div>

      <div className='EnergySection'> 
        <h2> Toggle Your Energy Level</h2>
        <button id='EnergyButton' className={className} onClick={handleEnergyShift} > {feeling} </button>
        <h4 className='EnergyTagline'>{tagline}</h4>
      </div>

      {/* <WorryCard text={text}/> */}
    
    </div>
  )
}

export default MyMind