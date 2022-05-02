import React,{useState} from 'react'
import "./SignUp.css"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


  
function SignUp() {
  

const [selected, setSelected] = useState(true)
const [placeholder, setPlaceHolder] = useState(true)

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [tribePasscode, setTribePasscode] = useState('')

const [tribeName, setTribeName] = useState('')

// function handleFormSubmit(e) {
//   console.log("Im hit rob!");
//   e.preventDefault()
//   setUsername('')
//   setEmail('')
//   setPassword('')
//   setTribeName('')
// }

function handleClickCreate(e) {
  e.preventDefault()
  setSelected(!selected)
  setPlaceHolder(true)

}
  function handleClickJoin(e) {
    e.preventDefault()
    setSelected(!selected)
   setPlaceHolder(false)


}

function handleUsername(e) {
  setUsername(e.target.value)

}

function handleEmail(e) {
  setEmail(e.target.value)
}

function handlePassword(e) {
  setPassword(e.target.value)
}

function handleTribeName(e) {
  setTribeName(e.target.value)
}

function handleTribePasscode (e) {
  setTribePasscode(e.target.value)
}

function handleCreateTribe(e) {
  e.preventDefault()
  setUsername('')
  setEmail('')
  setPassword('')
  setTribeName('')

  fetch("/new_tribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username, 
      email: email,
      password:password,
      energy:2,
  
      //Tribe Info
      name: tribeName,
      code: uuidv4()
    })
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
  window.location.href = "http://localhost:4000/my-tribes";

}

function handleJoinTribe(e){
  e.preventDefault()
  setUsername('')
  setEmail('')
  setPassword('')
  setTribeName('')

  fetch("/join_tribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username, 
      email: email,
      password:password,
      energy:2,

      // Tribe Info
      code: tribePasscode
    })
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
  window.location.href = "http://localhost:4000/tribes";

}
  // alert('Hello - depending on errors or not send message')


  return (
    <div className='SignUpMaster'>
      
  <form onSubmit={placeholder ? handleCreateTribe : handleJoinTribe}>

    <div id="signupparent">
      <div id="signupbox">
        <h1 id='SignUpTitle'>Tribe</h1> 
        <h2>Life Is Better With Your Tribe</h2>
        <button id={selected ? 'SelectedBox' : null} className='SignUpButton' onClick={handleClickCreate}>Create A Tribe</button>
        <button id={selected ? null : "SelectedBox"} className='SignUpButton' onClick={handleClickJoin}>Join A Tribe</button>
        <div id="signups">
        <input className='signupinput' placeholder='Create Username' value={username}  onChange={handleUsername}></input>
        <input className='signupinput' placeholder='Email Address' value={email}  onChange={handleEmail}></input>
        <input type="password" className='signupinput' placeholder='Set A Password' value={password}   onChange={handlePassword}></input>
        <input type="signupinput" className='signupinput Tribey' value={placeholder ? tribeName : tribePasscode } onChange={placeholder ? handleTribeName : handleTribePasscode} placeholder={placeholder ? " Set A Tribe Name" : "Enter A Tribe Passcode"}></input>
        {/* on change set the code or handle the name */}
  
        </div>
        {/* <Link to="/login"> */}
          <button id="signupbutton" className='signupinput' >{placeholder ? "Create" : "Join Tribe" }</button>
          {/* </Link> */}

        <div id="login">
        <p className="HaveOne">Already have a Tribe?</p><Link to="/login"><p id="larea">Login here</p></Link>
        </div>
      </div>
    </div>
  </form>

    </div>
  )
}

export default SignUp