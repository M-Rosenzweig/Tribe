import React, { useEffect, useState } from 'react'
import './Tribe.css'
import MemberCard from '../components/MemberCard'

function Tribe({ user, tribes }) {
  const [tribeMembers, setTribeMembers] = useState([])
  const [tribeName, setTribeName] = useState('')
  const [tribeCode, setTribeCode] = useState('')
  // const [currentTribe, setCurrentTribe] = useState(tribes[0].id)


  // console.log(currentTribe);

  function handleTribeChange(event){
    let newTribeId = event.target.value;
    fetchAndPopulate(newTribeId);
    // setCurrentTribe(newTribeId)
    // handleCurentTribe(currentTribe)
  }

  function fetchAndPopulate(TribeId){
    fetch("/s_tribes/" + TribeId)
    .then(resp => resp.json())
    .then(data => {
      setTribeMembers(data.users)
      // console.log(data.users) 
    })
  }

  useEffect(() => {
    if (tribes[0]){
      fetchAndPopulate(tribes[0].id)
      setTribeName(tribes[0].name)
      setTribeCode(tribes[0].code)

    }
  }, [tribes])

  return (
    /* <div className="members">{tribe.members.map(member =>{
        return <div className='member'>{member.name}</div>
      })}</div> */

    <div className="TribeMain">
      <div className='TribeDeets'>
        <select className='TribeNamesDropDown' onChange={handleTribeChange}>
          {tribes.map(tribe => <option key={tribe.id} value={tribe.id}>{tribe.name}</option>)}
        </select>
        <button className='leaveTribe'>Leave Tribe</button>
      </div>

      <div className='TribeMembers'>

      {user.energy !== '' && <MemberCard member={user}/>}  

        {tribeMembers.filter(member => member.id !== user.id)
        .map(member => <MemberCard key={member.id} member={member}/>)}
      </div>

      <div className='InviteMember'>
        <div className='BoxDeets'>
        <h1 className="tribeNameBottom">{tribeName}</h1>
        <button className='tribeCodeBottom' >Invite Code</button>
        <p className='TribeCode'>{tribeCode}</p>
      </div>

       
      </div>
      

    </div>
  )
}

export default Tribe