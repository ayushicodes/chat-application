import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="5c4a0041-a926-48f3-9725-5e095ccd0cf1"
      userName="ayushicodes"
      userSecret="704367"
      renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
    />
  );
}

export default App;
