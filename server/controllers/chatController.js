import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function prepareRequestData(userMessage) {
  return {
    model: process.env.MODEL_NAME,
    messages: [
      { role: "user", content: userMessage },
      { role: "system", content: process.env.VITE_SYSTEM_PROMPT },
    ],
    stream: false,// ollama 預設是stream: true
  };
}

export async function getChatResponse(req, res) {
  const userMessage = req.body.message;
  console.log("userMessage:", userMessage);

  if (!userMessage) {
    return res.status(400).json({ error: "請輸入內容" });
  }

  try {
    const requestData = prepareRequestData(userMessage);
    const ollamaReponse = await axios.post(
      `${process.env.OLLAMA_ENDPOINT}/api/chat`,
      requestData
    );

    const aiResponse = ollamaReponse.data.message.content;
    console.log("AI Response:", aiResponse);
    res.send(aiResponse);// 純文字
  } catch (error) {
    console.error("Error calling Ollama APPI:", error);
    res.status(500).json({ error: "Ollama API 呼叫失敗" });
  }
}
