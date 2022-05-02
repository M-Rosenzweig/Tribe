import React from 'react'
import { RiSailboatLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
 import {BsChatSquare} from "react-icons/bs"
 import {FaCampground} from "react-icons/fa"
 import { FiCoffee} from "react-icons/fi"
 import { GiBookshelf} from "react-icons/gi"
 

 
import {NavLink} from "react-router-dom";
import './Nav.css'

function Nav({username, email, setUserFunction}) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUserFunction( 
          {
            username:'',
            email: ''
          }
        );
        console.log(username);
      }
    });
  }

  function handleLogin() {
    console.log("send me to the Login page plz");

  }



  return (
    <div className='NavBar'>
      <h1 className='NavTitle'>🏕️ Tribe</h1>
     {/* <h2 className='NavWelcome'>Welcome User </h2>  */}

      <div className='NavOptions'>
     <NavLink to="/tribes"><h2><FaCampground/> My Tribe </h2></NavLink>  
      <NavLink to='/chat'><h2> <BsChatSquare/> Chat </h2></NavLink> 
     <NavLink to='/MyMind'> <h2> <FiCoffee/> On My Mind</h2> </NavLink>
     <NavLink to="/myBooks"><h2> <GiBookshelf/> My Shelf </h2> </NavLink> 
     <NavLink to='/voting'><h2><RiSailboatLine/> Challenges</h2> </NavLink> 
     {/* <FiLogOut/> */}
   
     
     <h2 className='Logout' onClick={handleLogout}> <MdLogout/>{ username ? "Logout" : null}</h2>
    <NavLink to='/login'><h2 className='Login' onClick={handleLogin}> <MdLogout/>{ username ? null : "Login"}</h2> </NavLink>
    <h3 className='NavUserName'>{username}</h3>
    <h3 className='NavUserEmail'>{email}</h3>
    

      </div>
 

    </div>
  )
}

export default Nav