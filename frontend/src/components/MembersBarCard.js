import React, {useState, useEffect} from 'react'
import "./MembersBarCard.css"


function MembersBarCard({ member }) {
  const [barEnergyClass, setBarEnergyClass] = useState('')

  useEffect(() => {
    switch(member.energy) {
      case 1:
        setBarEnergyClass('BarEnergyWeak')
        break;
      case 2:
        setBarEnergyClass('BarEnergyDecent')
        break;

        case 3:
          setBarEnergyClass('BarEnergySolid')

          break;
        case 4:
          setBarEnergyClass('BarEnergyAwesome')
          break;
    }
  },[])

  return (
    <div id={barEnergyClass} className='MemberBarCard'>
      {member.username}
      
      
      </div>
  )
}

export default MembersBarCard