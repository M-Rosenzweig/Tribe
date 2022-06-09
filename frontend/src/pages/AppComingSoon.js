import React from 'react'
import './AppComingSoon.css'
import { RiSailboatLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
 import {BsChatSquare} from "react-icons/bs"
 import {FaCampground} from "react-icons/fa"
 import { FiCoffee} from "react-icons/fi"
 import { GiBookshelf} from "react-icons/gi"
 import { BsBoxSeam} from "react-icons/bs"
 import { GiCampfire} from "react-icons/gi"

function AppComingSoon() {
  return (
    <div className='MasterAppSoon'>

        {/* <div className='TitleApp'> */}
           <div className='TribeApp'>
                <h2 className='TribeNameSoon'>Tribe</h2>
                <p className='StrongerSoon'> Stronger Together </p> 
           </div>
            <div className='OptionsMobile'>
                <div className='IndividualButton'><FaCampground/></div>
                <div className='IndividualButton'><FiCoffee/></div>
                <div id='ChatButton' className='IndividualButton'><BsChatSquare/></div>
                <div className='IndividualButton'><BsBoxSeam/></div>
                <div className='IndividualButton'><GiCampfire/></div>
              
             
            </div>
        
        {/* </div> */}

    </div>
  )
}

export default AppComingSoon