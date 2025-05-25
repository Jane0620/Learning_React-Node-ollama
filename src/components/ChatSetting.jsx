import React, { useState } from "react";
import "/src/styles/main.css";

function ChatSetting({ newPrompt }) {
    const [inputValue, setInputValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        newPrompt(inputValue);
        setInputValue("");
    }
    /*
    彈出收起輸入框
    */
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    }
    return (
        <>
            <img className="setting-img" src="./src/assets/setting.svg" onClick={toggleVisibility}></img>
            {isVisible && (
                <div className="setting-form">
                    <label>自訂系統提示詞</label>
                    <textarea
                        type="text"
                        row={15}
                        cols={45}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={handleSubmit}>儲存</button>
                </div>
            )}
        </>)
}

export { ChatSetting };