import React from 'react'
// import { FiLogOut } from 'react-icons/FiLogOut';
import { Link, NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <div className='NavBar'>
      <h1 className='NavTitle'>🏕️ Tribe</h1>
     <h2 className='NavWelcome'>Welcome User </h2> 


      <div className='NavOptions'>
     <h2>My Tribe </h2> 
     <h2>Chat </h2> 
     <h2>On My Mind</h2> 
     <h2>Books </h2> 
     <h2>Challenges</h2> 
     {/* <FiLogOut/> */}
     <h2 className='Logout'> Logout</h2>
    {/* 
    <NavLink to="/chat">Chat </NavLink> 
    <NavLink to="/myMind">On My Mind</NavLink> 
    <NavLink to="/myBooks">Books </NavLink> 
    <NavLink to="/voting">Challenges</NavLink>   */}

      </div>
 

    </div>
  )
}

export default Nav