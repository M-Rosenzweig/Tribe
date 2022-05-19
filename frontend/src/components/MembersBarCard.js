import React, {useState, useEffect} from 'react'
import "./MembersBarCard.css"


function MembersBarCard({ member, handleSetMemberID, handleSetMemberName, terneryBell  }) {
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

  function onHandleSetMemberDetails(id, name) {
    handleSetMemberID(id)
    handleSetMemberName(name)
  }

  return (
    <div id={barEnergyClass} onClick={ () => onHandleSetMemberDetails(member.id, member.username)} className='MemberBarCard'>
    <p>{member.username}</p>  
      
      
      </div>
  )
}

export default MembersBarCard