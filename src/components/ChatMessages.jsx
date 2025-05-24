import { useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';

function ChatMessages({ messages }) {
    const messagesContainerRef = useRef(null);

    // 滾動到最新訊息
    useEffect(() => {
        const messagesContainer = messagesContainerRef.current;
        if (!messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // 視圖滾動到最新訊息，scrollHeight 表示容器內容的總高度，scrollTop 控制滾動位置，將其設為 scrollHeight 可確保顯示最新內容。
        }
    }, [messages]);// 當 messages 改變時觸發

    return (
        <div className="messages-container" ref={messagesContainerRef}>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.sender === "user" ? "user-message" : "ai-message"
                        }`}
                >
                    {message.sender === "ai" ? (<ReactMarkdown>{message.text}</ReactMarkdown>) : (message.text)}{/* 確保訊息文字被渲染，若訊息來自Ollama，使用Markdown渲染 */}
                </div>
            ))}

        </div>)
}
export { ChatMessages };