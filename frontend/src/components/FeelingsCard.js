import React from 'react'
import "./FeelingsCard.css"
import { RiCloseCircleLine } from "react-icons/ri";



function FeelingsCard({ text, id, handleFeelingDelete }) {

  function handleDelete(id) {
    handleFeelingDelete(id)
  }

  return (
    <div  className='FeelingCard'>
      {text} <button className='DeleteFeeling' onClick={() => handleDelete(id)} ><RiCloseCircleLine/></button>
    </div>
  )
}

export default FeelingsCard