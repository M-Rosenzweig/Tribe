import React, { useEffect, useState } from 'react'
import './Tribe.css'
import MemberCard from '../components/MemberCard'

function Tribe({ user, tribes }) {

  const [tribeMembers, setTribeMembers] = useState([])
  const [tribeName, setTribeName] = useState('')
  const [tribeCode, setTribeCode] = useState('')

  function handleTribeChange(event){
    let newTribeId = event.target.value;
    fetchAndPopulate(newTribeId);
  }

  function fetchAndPopulate(TribeId){
    fetch("/s_tribes/" + TribeId)
    .then(resp => resp.json())
    .then(data => {
      setTribeMembers(data.users)
      // also need to change the state of the tribes name on the bottom after the 
      // user changes which tribe they looking at + change the code 
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
        <MemberCard member={user} />

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