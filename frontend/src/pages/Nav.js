import React from 'react'
import { RiSailboatLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
 import {BsChatSquare} from "react-icons/bs"
 import {FaCampground} from "react-icons/fa"
 import { FiCoffee} from "react-icons/fi"
 import { GiBookshelf} from "react-icons/gi"
 

 
import { Link, NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <div className='NavBar'>
      <h1 className='NavTitle'>🏕️ Tribe</h1>
     {/* <h2 className='NavWelcome'>Welcome User </h2>  */}


      <div className='NavOptions'>
     <h2><FaCampground/> My Tribe </h2> 
     <h2> <BsChatSquare/> Chat </h2> 
     <h2> <FiCoffee/> On My Mind</h2> 
     <h2> <GiBookshelf/> Books </h2> 
     <h2> <RiSailboatLine/> Challenges </h2> 
     {/* <FiLogOut/> */}
      {/* <div className='NavOptions2'>
      <NavLink to="/chat">Chat </NavLink> 
      <NavLink to="/myMind">On My Mind</NavLink> 
      <NavLink to="/myBooks">Books </NavLink> 
      <NavLink to="/voting">Challenges</NavLink> 
      </div> */}
     
     <h2 className='Logout'> <MdLogout/> Logout</h2>

    

      </div>
 

    </div>
  )
}

export default Nav