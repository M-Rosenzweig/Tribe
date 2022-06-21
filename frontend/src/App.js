import React, {useState, useEffect} from "react";
import Tribe from "./pages/Tribe"
import Nav from "./pages/Nav"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import MyMind from "./pages/MyMind"
import Chat from "./pages/Chat"
import Voting from "./pages/Voting"
import AppComingSoon from "./pages/AppComingSoon";
import Resources from './pages/Resources'
import './App.css'
import { Route, Routes } from "react-router-dom";


function App() {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 730);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
    fetch("/api/me").then((resp) => {
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
    <> 
    {isDesktop ? (
        <div id="AppMain" className="App">
    
        <Nav user={user.id} username={user.username} email={user.email} setUserFunction={setUserFunction} />
   
        <Routes>
        <Route path="/my-tribes" element={user.id !== '' ? <Tribe user={user} tribes={user.s_tribes} /> : <Login/>}/>
        <Route exact path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/myMind" element={user.id !== '' ? <MyMind user={user} tribes={user.s_tribes} /> : <Login/>}/>
        <Route path="/chat" element={user.id !== '' ? <Chat user={user} tribes={user.s_tribes} /> : <Login/>}/>
        <Route path="/governance" element={user.id !== '' ? <Voting/> : <Login/>}/>
        <Route path="/resources" element={user.id !== '' ? <Resources/> : <Login/>}/>
        <Route path="/challenges" element={user.id !== '' ? <Voting/> : <Login/>}/>
   
        <Route path="/voting" element={<Voting />}/>
   
   
        </Routes>
         
       </div>
      ) : (
       <AppComingSoon/>
      )}
    
  </>
  );
 

}

export default App;
