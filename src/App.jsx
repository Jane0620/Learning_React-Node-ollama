import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import "./styles/main.css";

//Vite 會將以 VITE_ 開頭的變數暴露給客戶端
const functionUrl = import.meta.env.VITE_API_BASE_URL + "/api/chat";

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);

    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      })

      // 檢查 HTTP 回應是否成功
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "伺服器發生錯誤。");
      }

      const aiResponse = await response.text();
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
      // 如果需要逐步累積回應，可以在這裡處理

    } catch (error) { 
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { sender: "ai", text: "發生錯誤，請稍後再試。" }]);
    }
  }


  return (
    <>
      <ChatMessages messages={messages}></ChatMessages>
      <ChatInput onSendMessage={sendMessage}></ChatInput>
    </>
  )
}

export default App
