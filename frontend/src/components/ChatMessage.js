import React, {useState, useEffect} from 'react'
import "./ChatMessage.css"


function ChatMessage({text, username, userID, messageUserID, time, energy, terneryBell, userEnergies}) {
  const [chatClassName] = useState(messageUserID !== userID ? "ChatMessageItem" : "UserChatMessageItem")
  const [energyClass, setEnergyClass] = useState('')

  // console.log(userEnergies);

  useEffect(() => {
    console.log('vibes');
    if(energy === 1){
      setEnergyClass("EnergyWeakColor")
    } else if(energy ===2) {
      setEnergyClass("EnergyDecentColor")
    } else if(energy === 3){
      setEnergyClass('EnergySolidColor')
    } else if(energy === 4){
      setEnergyClass('EnergyAwesomeColor')
    }
  },[])

  // useEffect(() => {
  //   console.log('vibes');
  //   if(userEnergies === 1){
  //     setEnergyClass("EnergyWeakColor")
  //   } else if(userEnergies ===2) {
  //     setEnergyClass("EnergyDecentColor")
  //   } else if(userEnergies === 3){
  //     setEnergyClass('EnergySolidColor')
  //   } else if(userEnergies === 4){
  //     setEnergyClass('EnergyAwesomeColor')
  //   }
  // },[terneryBell])

  let x = time.split("T")[1].split(".")[0];
  // console.log(energyClass);

  return (
    <>
    <div className={chatClassName}>
      <div id='ChatUsername' className='MessageDetails'>
        <div className={energyClass}> {username}</div> <div>  {x} </div>  
      </div>
      <div className='ChatTextDetails'> 
        {text}
      </div>
    </div>



{/* 
     <div className={chatClassName}>
      {/* <div className='MessageTime'>{x}</div>  */}
     {/* <p className='ChatMessageUsername'>{username}</p>

    <div className='ChatMessageDetails'>
        {text}
      </div>
     </div>  */}


    </>
 
  )
}

export default ChatMessage