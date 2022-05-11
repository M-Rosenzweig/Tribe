import React, {useState, useEffect} from 'react'
import "./ChatMessage.css"


function ChatMessage({text, username, userID, messageUserID, time, energy, terneryBell, userEnergies}) {
  const [chatClassName] = useState(messageUserID !== userID ? "ChatMessageItem" : "UserChatMessageItem")
  const [energyClass, setEnergyClass] = useState('')
  const [transparent, setTransparent] = useState('')
  const [targetTime, setTargetTime] = useState('')
  const [textDetails, setTextDetails] = useState('ChatTextDetails')

  // console.log(userEnergies)
  useEffect(() => {
    messageUserID == userID ? setTransparent('TransparentName') : setTransparent('')
    messageUserID == userID ? setTargetTime('ChatTime') : setTargetTime('')
    messageUserID == userID ? setTextDetails('UserChatTextDetails') : setTextDetails('ChatTextDetails')
  })

  useEffect(() => {
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
     {/* { transparent !== 'TransparentName' ? {username} : null} */}
    <div className={chatClassName}>
      <div id='ChatUsername' className='MessageDetails'>
        <div id={transparent} className={energyClass}> {username} </div> <div className={targetTime}>  {x} </div>  
      </div>
      <div className={textDetails}> 
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