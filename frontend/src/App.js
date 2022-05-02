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



function App() {

  const [user, setUser] = useState({
    username:"",
    email:'',
    id: '',
    s_tribes:[]

  }
  )

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  function setUserFunction() {
    setUser({
      username:"",
      email:'',
      id: '',
      s_tribes:[]
  
    })
  }



  return (
    <div id="AppMain" className="App">
    
     <Nav username={user.username} email={user.email} setUserFunction={setUserFunction} />

     <Routes>
     <Route path="/my-tribes" element={<Tribe user={user} tribes={user.s_tribes} />}/>
     <Route path="/" element={<Login />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/signUp" element={<SignUp />}/>
     <Route path="/myMind" element={<MyMind />}/>
     <Route path="/chat" element={<Chat />}/>

     <Route path="/myBooks" element={<MyBooks />}/>
     <Route path="/friendsBooks" element={<FriendsBooks />}/>
     <Route path="/voting" element={<Voting />}/>


     </Routes>
      
    </div>
  );
}

export default App;
