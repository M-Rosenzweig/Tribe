import React from 'react'
import './Tribe.css'
import MemberCard from '../components/MemberCard'

function Tribe() {
  // console.log(user.bonds[0].s_tribe.name);
  // console.log(tribeName.s_tribe.name);

  return (
    /* <div className="members">{tribe.members.map(member =>{
        return <div className='member'>{member.name}</div>
      })}</div> */

    <div className="TribeMain">
      <div className='TribeDeets'>
      <button className='leaveTribe'>Leave Tribe</button>
      </div>

      <div className='TribeMembers'>
      <MemberCard/>
      <MemberCard/>
      <MemberCard/>
      </div>

      <div className='InviteMember'>
        <div className='BoxDeets'>
        <h1 className="tribeNameBottom">Tribe Name</h1>
        <button className='tribeCodeBottom' >Invite Code</button>
        <p className='TribeCode'>7d1c92b6-6fdf-4c8f-abad-0aa7b707b564</p>
      </div>

       
      </div>
      

    </div>
  )
}

export default Tribe