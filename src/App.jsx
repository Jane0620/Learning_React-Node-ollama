import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import "./styles/main.css";

function App() {
  const [messages, setMessages] = useState([]);
  const sendMessage = (userMessage) => {
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);

    // try{
      // const event = fetch(``)
      setMessages((prev)=>[...prev, {sender:"ai", text:"not yet"}]);
      // let accumulateResponse = "";

    // }catch{}
  }


  return (
    <>
    <ChatMessages messages={messages}></ChatMessages>
    <ChatInput onSendMessage={sendMessage}></ChatInput>
    </>
  )
}

export default App
