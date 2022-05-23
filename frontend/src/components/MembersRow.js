// import React, {useState} from 'react'
// import MembersBarCard from "../components/MembersBarCard";
// import UserBarCard from "../components/UserBarCard";


// import { FaMoon } from "react-icons/fa";
// import { BsFillSunFill } from "react-icons/bs";


// I made this Component with the hope of simplifiying the chat page component but it turns out that the page is very connected and its not as simple to 
// just put this here because - the clicking on the chat row affects whats displayed in the Chat side deets..... 

// function MembersRow({tribeMembers, user, handleDarkMode, handleSetMemberID, handleSetMemberName}) {

//     const [darkMode, setDarkMode] = useState(true)
//     const [memberName, setMemberName] = useState(user.username);
//     const [energy, setEnergy] = useState(user.energy);
//     const [memberID, setMemberID] = useState(user.id);


//     function onHandleDarkMode () {
//         handleDarkMode()
//     }


//       function onHandleSetMemberID(id) {
//         handleSetMemberID(id);
//       }
    
//       function onHandleSetMemberName(name) {
//         setMemberName(name);
//       }


//   return (
//       <> 
//         <div onClick={onHandleDarkMode} className="ChatModeToggle"> {darkMode ? <FaMoon/> : <BsFillSunFill/> } </div>
//         {tribeMembers
//           .filter((member) => member.id !== user.id)
//           .map((member) => (
//             <MembersBarCard
//               handleSetMemberName={onHandleSetMemberName}
//               onHandleSetMemberID={onHandleSetMemberID}
//               key={member.id}
//               member={member}
//             />
//           ))}

//         {user.energy !== "" && (
//           <UserBarCard
//             handleSetMemberName={handleSetMemberName}
//             handleSetMemberID={handleSetMemberID}
//             member={user}
//             energy={energy}
//           />
//         )}
//       </>
//   )
// }

// export default MembersRow