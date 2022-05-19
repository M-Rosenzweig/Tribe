import React, {useEffect, useState} from 'react'
import "./MemberCard.css"


function MemberCard({ member }) {

  const [energy, setEnergy] = useState('')
  const [energyClassName, setEnergyClassName] = useState('')

  useEffect(() => {
    switch(member.energy) {
      case 1:
        setEnergy('Weak')
        setEnergyClassName('EnergyWeak')
        break;
      case 2:
        setEnergy('Decent')
        setEnergyClassName('EnergyDecent')
        break;

        case 3:
          setEnergy('Solid')
          setEnergyClassName('EnergySolid')

          break;
        case 4:
          setEnergy('Awesome')
          setEnergyClassName('EnergyAwesome')
          break;
    }
  },[])

  return (
    <div id={energy} className='MemberCard scale-in-center' >
        
      <h2> {member.username}</h2> 

      <div id='tribePageEnergy' className={energyClassName}>
       {energy}
      </div> 

       <div className='MemberCardBox' >
        <p>P(3) </p>
        <p>W(2) </p>
       </div>
 


    </div>
  )
}

export default MemberCard