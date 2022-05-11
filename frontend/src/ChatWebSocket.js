import React, { useEffect } from "react";

function ChatWebSocket({ cableApp, tribeId, updateMessages }) {
  useEffect(() => {
    cableApp.tribe = cableApp.cable.subscriptions.create(
      {
        channel: "STribesChannel",
        tribe_id: tribeId,
      },
      {
        received: (updatedChatMessages) => {
          console.log("updatedChatMessages", updatedChatMessages);
          updateMessages(tribeId);
        },
      }
    );
  }, []);

  return <></>;
}

export default ChatWebSocket;
