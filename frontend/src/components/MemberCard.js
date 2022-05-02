import React from 'react'
import "./MemberCard.css"


function MemberCard({ member }) {
  return (
    <div className='MemberCard' >
        
      <h1> {member.username}</h1> 

      <div>
        energy level (dynamic)
      </div> 

       <div className='MemberCardBox' >
        <p>P(5) </p>
        <p>W(3) </p>
       </div>
 


    </div>
  )
}

export default MemberCard