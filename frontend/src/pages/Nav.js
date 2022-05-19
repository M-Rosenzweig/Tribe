import React from 'react'
import { RiSailboatLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
 import {BsChatSquare} from "react-icons/bs"
 import {FaCampground} from "react-icons/fa"
 import { FiCoffee} from "react-icons/fi"
 import { GiBookshelf} from "react-icons/gi"
 import { BsBoxSeam} from "react-icons/bs"
 import { GiCampfire} from "react-icons/gi"
 import {  CgProfile } from "react-icons/cg"


 
//  import { CgProfile} from "react-icons/cg"
 
 

 
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
        // console.log(username);
      }
    });
  }

  function handleLogin() {
    // console.log("send me to the Login page plz");

  }

  function handleShowProfile () {
    console.log('create a profile page')
  }



  return (
    <div className='NavBar'>
      <h1 className='NavTitle'>🏕️ Tribe</h1>
      {/* <p className='NavUserName'>Welcome {username}</p> */}
     {/* <h2 className='NavWelcome'>Welcome User </h2>  */}

      <div className='NavOptions'>
     <NavLink to="/my-tribes" activeClassName="main-nav-active"  ><h2><FaCampground/> My Tribes </h2></NavLink>  
      <NavLink to='/chat'><h2> <BsChatSquare/> Chat </h2></NavLink> 
     <NavLink to='/MyMind'> <h2> <FiCoffee/> On My Mind</h2> </NavLink>
     <NavLink to="/myBooks"><h2> <GiBookshelf/> My Shelf </h2> </NavLink> 
     <NavLink to='/voting'><h2><BsBoxSeam/> Resources</h2> </NavLink> 
     <NavLink to='/voting'><h2><GiCampfire/> Governance</h2> </NavLink> 
     <NavLink to='/voting'><h2><RiSailboatLine/> Challenges</h2> </NavLink> 
     <NavLink to='/login'> <h2 className='Logout' onClick={handleShowProfile}> {username ? <CgProfile/> : null} { username ? "Profile" : null}</h2> </NavLink>

     {/* <FiLogOut/> */}
 
     
     </div>


     <div className='NavOptions2'> 
     <h3 className='NavUserEmail'>{username}</h3>
     <NavLink to='/login'> <h2 className='Logout' onClick={handleLogout}> {username ? <MdLogout/> : null} { username ? "Logout" : null}</h2> </NavLink>
    <NavLink to='/login'><h2 className='Login' onClick={handleLogin}> {username ? null : <MdLogout/> } { username ? null : "Login"}</h2> </NavLink>
 


   
     </div>

    
   
    

  
 

    </div>
  )
}

export default Nav