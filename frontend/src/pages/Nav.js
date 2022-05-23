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
     <h2> <NavLink  to="/my-tribes" activeclassname="active"><FaCampground/> My Tribes</NavLink> </h2>  
     <h2> <NavLink to='/chat' activeclassname="active"> <BsChatSquare/> Chat  </NavLink>  </h2>  
     <h2> <NavLink to='/MyMind' activeclassname="active"> <FiCoffee/> On My Mind </NavLink> </h2>
     <h2> <NavLink  to="/myBooks" activeclassname="active"> <GiBookshelf/> My Shelf</NavLink>  </h2> 
     <h2> <NavLink to='/voting'  activeclassname="active"><BsBoxSeam/> Resources </NavLink> </h2>  
     <h2>
     <NavLink to='/voting' activeclassname="active"><GiCampfire/> Governance </NavLink> 
    </h2> 
     <h2> <NavLink to='/voting'  activeclassname="active"><RiSailboatLine/> Challenges </NavLink>  </h2> 
    
     

     {/* <FiLogOut/> */}
 
     
     </div>


     <div className='NavOptions2'> 
     <NavLink to='/login'> <h2 activeclassname="active" className='Logout' onClick={handleShowProfile}> {username ? <CgProfile/> : null} {username}</h2></NavLink>
     {/* <h3 className='NavUserEmail'>Welcome, {username}</h3> */}
     <NavLink to='/login'> <h2 className='Logout' onClick={handleLogout}> {username ? <MdLogout/> : null} { username ? "Logout" : null}</h2> </NavLink>
    <NavLink to='/login'><h2 className='Login' onClick={handleLogin}> {username ? null : <MdLogout/> } { username ? null : "Login"}</h2> </NavLink>
 


   
     </div>

    
   
    

  
 

    </div>
  )
}

export default Nav