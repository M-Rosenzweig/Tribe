import React, { useEffect } from "react";

function ChatWebSocket({ cableApp, tribeId, updateMessages, userID }) {
  useEffect(() => {
    cableApp.tribe = cableApp.cable.subscriptions.create(
      {
        channel: "STribesChannel",
        tribe_id: tribeId,
        user: userID

      },
      {
        received: (updatedChatMessages) => {
          // console.log("updatedChatMessages", updatedChatMessages);
          updateMessages(tribeId);
        },
      }
    );
  }, []);

  return <></>;
}

export default ChatWebSocket;
