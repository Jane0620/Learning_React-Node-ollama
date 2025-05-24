# React + Node + ollama
本專案用途為學習及練習前端React框架、後端串接API

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
|   |  ├─ChatSetting.jsx    # 提示詞設定(❌)
|   |  ├─ChatHistory.jsx    # 聊天紀錄(❌)
|   |  └─SideBar.jsx        # 側邊欄(❌)
|   ├─styles/           
|   |  └─main.css
|   ├─App.jsx               # 事件呼叫邏輯
|   ├─index.css
|   └─main.jsx
├──index.html               # 主畫面
├──.env                     # 環境變數
└── README.md               # 說明
```
## 安裝
- 克隆專案
    ```bash
    git clone [repository-url]
    ```

- 安裝依賴
    ```bash
    npm install
    ```

- 配置環境變數
     > 複製 .env.example 到 .env 並填寫必要的配置：
    ```bash
    cp .env.example .env
    ```   

## 學習
- React 
    > 連結：  
    > - https://youtu.be/aBTiZfShe-4?si=WVtymLBqkct8DxNq
    > - https://youtu.be/O2Glkf0v0HM?si=tLVHGvgATKH-CSJ4
- Ollama API
    > 連結：
    > - https://www.runoob.com/ollama/ollama-api.html 
    > - https://github.com/ollama/ollama/blob/main/docs/api.md
- 其他
    > 連結：
    > - https://vocus.cc/article/66e505d3fd8978000187effc   

## 開發指南

- 提交規範📖
    - feat: 新功能
    - fix: 修復問題
    - docs: 文檔更新
    - style: 代碼格式調整
    - refactor: 代碼重構
    - test: 測試相關
    - chore: 構建過程或輔助工具的變動

## 授權
<!-- - MIT License -->