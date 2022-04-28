import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Login.css"

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function setEmailFunction(e) {
    setEmail(e.target.value)
  }

  function setPasswordFunction (e) {
    setPassword(e.target.value)
  }

  function handleLogin (e) {
    e.preventDefault()
    // create the user and take him to the My Tribe Page
  }

  return (
    <div className='LoginMaster'>
      <div className='LoginHeadings'> 
        <h1 id='LoginTitle'>Tribe</h1> 
        <h2 id='LoginSubtitle'>Stronger Together</h2>
     </div>
    <form onSubmit={handleLogin}>
     <div className='LoginForm'>
      <div id="loginbox">
        {/* <h2>You deserve a job that loves you back</h2> */}
        {/* <h3>Lets Tribe</h3> */}
        <div id="logins">
        <input className='logininput' placeholder='Email' value={email} onChange={setEmailFunction}></input>
        <input type="password" className='logininput' placeholder='Password' value={password} onChange={setPasswordFunction}></input>
        <button id="loginbutton" className='logininput' onClick={handleLogin} >Login</button>
        </div>
        <div id="signup">
        <p>Dont have an account?</p>
         <Link to="/signUp"> <p id="sarea" >Sign up!</p> </Link>
        </div>
      </div>
     </div>
    
     </form>
  </div>

  )
}

export default Login