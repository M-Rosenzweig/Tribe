import React from 'react'
import "./SignUp.css"
import { Link } from "react-router-dom";


  function handleFormSubmit() {

  }

  function handleFirstName() {

  }
    function handleLastName() {

  }

  function handleEmail() {

  }

  function handlePassword() {

  }

  function handleSubmit() {

  }

  function handleVibes() {

  }
  

function SignUp() {
  return (
    <div className='SignUpMaster'>
      
      <form onSubmit={handleFormSubmit}>
    <div id="signupparent">
      <div id="signupbox">
        <h1 id='SignUpTitle'>Tribe</h1> 

        <h2>Life Is Better With Your Tribe</h2>
        {/* <h3>Join Or Create A Tribe</h3> */}
        <button className='SignUpButton SelectedBox'>Create A Tribe</button>
        <button className='SignUpButton'>Join A Tribe</button>
        <div id="signups">
        {/* value={firstName} */}
        {/* value={lastName} */}
        {/* value={email} */}
        {/* value={password} */}
        {/* defaultValue={frontier} */}
        <input className='signupinput' placeholder='Create Username'  onChange={handleEmail}></input>
        <input className='signupinput' placeholder='Email Address'  onChange={handleEmail}></input>
        <input type="password" className='signupinput' placeholder='Set A Password'  onChange={handlePassword}></input>
        <select  className='signupinput' onChange={handleVibes}>
          <option value="frontier" disabled hidden> Choose Frontier</option>
          <option >Data Science</option>
          <option>Software Engineering</option>
          <option>Cyber Security</option>
          <option>UX Design</option>
        </select>
        <Link to="/login"><button id="signupbutton" className='signupinput' onClick={handleSubmit}>Sign Up</button></Link>
        </div>
        <div id="login">
        <p>Already have an account?</p> <Link to="/login"><p id="larea">Login here!</p></Link>
        </div>
      </div>
    </div>
  </form>

    </div>
  )
}

export default SignUp