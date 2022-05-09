import React, {useState, useEffect} from "react";
import Tribe from "./pages/Tribe"
import Nav from "./pages/Nav"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import MyMind from "./pages/MyMind"
import Chat from "./pages/Chat"
import MyBooks from "./pages/MyBooks"
import FriendsBooks from "./pages/FriendsBooks"
import Voting from "./pages/Voting"
import './App.css'
import { Route, Routes } from "react-router-dom";



function App({ cableApp }) {

  const [user, setUser] = useState({
    username:"",
    energy:'',
    email:'',
    id: '',
    s_tribes:['']

  })

  
  // const [allUserTribes, setAllUserTribes] = useState([])
  // const [currentTribe, setCurrentTribe] = useState('')

  // console.log(allUserTribes)
  // console.log(currentUsers)
  // let tribeId = user.s_tribes[0].id

  // useEffect(() => {
  //   {
  //     fetch("/s_tribes/" + tribeId)
  //     .then(resp => resp.json())
  //     .then(data => {
  //     setCurrentUsers(data.users)
  //     console.log('vibes');
  //     })

  //   }
  // }, [user])

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((userData) => setUser(userData))
        // .then(handleTribeDetails());
      }
    });
  }, []);

  // function handleTribeDetails() {
  //   console.log('vibes');
  //   setAllUserTribes([user.s_tribes])
  //   setCurrentTribe(user.s_tribes[0].id)
  // }


  function setUserFunction() {
    setUser({
      username:"",
      email:'',
      id: '',
      s_tribes:[]
  
    })
  }

//  function handleCurrentTribe (id) {
//   console.log(id);
//  }
// handleCurrentTribe={handleCurrentTribe} 


  return (
    <div id="AppMain" className="App">
    
     <Nav username={user.username} email={user.email} setUserFunction={setUserFunction} />

     <Routes>
     <Route path="/my-tribes" element={<Tribe user={user} tribes={user.s_tribes} />}/>
     <Route path="/" element={<Login />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/signUp" element={<SignUp />}/>
     <Route path="/myMind" element={user.id !== '' && <MyMind user={user} tribes={user.s_tribes} />}/>
     <Route path="/chat" element={user.id !== '' && <Chat cableApp={cableApp} user={user} tribes={user.s_tribes} />}/>

     <Route path="/myBooks" element={<MyBooks />}/>
     <Route path="/friendsBooks" element={<FriendsBooks />}/>
     <Route path="/voting" element={<Voting />}/>


     </Routes>
      
    </div>
  );
}

export default App;
