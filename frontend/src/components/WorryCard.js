import React from 'react'
import "./WorryCard.css"
import { RiCloseCircleLine } from "react-icons/ri";


function WorryCard({text, id, handleWorryDelete}) {
    // console.log(text);
    // console.log(id);

    function handleWorry(id) {
        handleWorryDelete(id)
    }

  return (
    <div className='WorryCardMaster'>
        {text} <button className='DeleteFeeling' onClick={() => handleWorry(id)}> <RiCloseCircleLine/></button>
    </div>
  )
}

export default WorryCard