import React,{ useState } from "react"

function ChatInput({ onSendMessage }) {
    const [inputValue, setInputValue] = useState(""); // 輸入&狀態儲存
    const handleSubmit = (e) => {
        e.preventDefault(); // 防止瀏覽器重新載入/刷新
        if (inputValue.trim()) {
            onSendMessage(inputValue); // 將輸入的訊息傳遞給父組件
            setInputValue("");
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (
        <div className="input-container" >
            <textarea
                type="text"
                placeholder="message"
                rows={5}
                cols={65}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            ></textarea>
            <button type="submit" onClick={handleSubmit}>send</button>
        </div>
    )
}

export { ChatInput };