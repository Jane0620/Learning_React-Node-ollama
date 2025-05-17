# React + Node + ollama
本專案用途為學習及練習前端React框架、後端串接API，透過製作簡單聊天機器人

## 目錄結構
```bash
.
├──server/
|   ├─src/
|   |  ├─routes/
|   |  ├─config/
|   |  └─controllers/
|   └─app.js                # 入口文件
├──dist/                    # 靜態文件(打包)
├──public/                  # 靜態文件
├──src/
|   ├─assets/               # 圖片
|   ├─components/           # 自己拆分的UI
|   |  ├─ChatInput.jsx      # 聊天輸入框
|   |  ├─ChatMessage.jsx    # 聊天訊息
|   |  ├─ChatSetting.jsx    # 提示詞設定
|   |  ├─ChatHistory.jsx    # 聊天紀錄
|   |  └─SideBar.jsx        # 側邊欄
|   ├─App.css
|   ├─App.jsx               # 事件呼叫邏輯
|   ├─index.css
|   └─main.jsx
├──index.html               # 主畫面
├──.env                     # 環境變數
└── README.md               # 說明
```


## 學習資源
- docs/api.md
- https://youtu.be/aBTiZfShe-4?si=WVtymLBqkct8DxNq
