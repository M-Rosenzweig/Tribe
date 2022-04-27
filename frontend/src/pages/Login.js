import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Login.css"

function Login() {

  function setEmailFunction() {

  }

  function setPasswordFunction () {

  }

  function handleLogin () {

  }

  return (
    <div className='LoginMaster'>
      <div className='LoginHeadings'> 
        <h1 id='LoginTitle'>Tribe</h1> 
        <h2 id='LoginSubtitle'>We Are Stronger Together</h2>
     </div>

     <div className='LoginForm'>
      <div id="loginbox">
        {/* <h2>You deserve a job that loves you back</h2> */}
        {/* <h3>Lets Tribe</h3> */}
        <div id="logins">
        <input className='logininput' placeholder='Email' onChange={setEmailFunction}></input>
        <input type="password" className='logininput' placeholder='Password' onChange={setPasswordFunction}></input>
        <button id="loginbutton" className='logininput' onClick={handleLogin} >Login</button>
        </div>
        <div id="signup">
        <p>Dont have an account?</p> <Link to="/signUp"><p id="sarea" >Sign up!</p></Link>
        </div>
      </div>
     </div>
    
    
    </div>
  )
}

export default Login