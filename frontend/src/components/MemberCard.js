import React from 'react'
import "./MemberCard.css"


function MemberCard({ member }) {
  return (
    <div className='MemberCard' >
        
      <h1> {member.username}</h1>  


    </div>
  )
}

export default MemberCard