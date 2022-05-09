import React, {useEffect} from 'react'

function ChatWebSocket({cableApp, broadcastObject, userID}) {

    // console.log(cableApp);
    // console.log(broadcastObject.messages);
    // console.log(broadcastObject.room);
    // console.log(broadcastObject.users);
    // messages !== [] ? setMessages

    let messages = broadcastObject.messages
    let room = broadcastObject.room
    let users = broadcastObject.users

    // console.log(messages);
    // console.log(room);
    // console.log(users);
    // console.log(users.length)

    useEffect(() => {
        // cableApp.room?
    cableApp = cableApp.cable.subscriptions.create(
        {
            channel: "TribeChannel",
            room: room,
            user: userID,
            users: users,
            messages: messages 
          },
          {
            // received: (updatedRoom) => {
            //   console.log("updatedRoom", updatedRoom);
            //   updateApp(updatedRoom);
            // },
          }
        );


    },[])












  return (
    <>
    </>
  )
}

export default ChatWebSocket