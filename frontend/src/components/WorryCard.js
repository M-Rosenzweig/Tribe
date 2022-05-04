import React from 'react'
import "./WorryCard.css"
import { RiCloseCircleLine } from "react-icons/ri";


function WorryCard({text}) {
    console.log(text);
  return (
    <div className='WorryCardMaster'>
        {text} <button className='DeleteFeeling'> <RiCloseCircleLine/></button>
    </div>
  )
}

export default WorryCard