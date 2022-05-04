import React from 'react'
import "./FeelingsCard.css"
import { RiCloseCircleLine } from "react-icons/ri";



function FeelingsCard(text) {
  console.log(text);
  return (
    <div  className='FeelingCard'>
      {text.text} <button className='DeleteFeeling'> <RiCloseCircleLine/></button>
    </div>
  )
}

export default FeelingsCard