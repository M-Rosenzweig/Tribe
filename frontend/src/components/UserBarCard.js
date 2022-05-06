import React, {useState, useEffect} from 'react'
import "./MembersBarCard.css"

function UserBarCard({member, handleSetMemberID, handleSetMemberName, energy}) {
    const [barEnergyClass, setBarEnergyClass] = useState('')

  useEffect(() => {
    switch(energy) {
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
  },[energy])

 function onHandleSetMemberDetails(id, name) {
    handleSetMemberID(id)
    handleSetMemberName(name)
 }

  return (
    <div id={barEnergyClass} onClick={ () => onHandleSetMemberDetails(member.id, member.username)} className='MemberBarCard'>
      {member.username}
    </div>
  )
}

export default UserBarCard