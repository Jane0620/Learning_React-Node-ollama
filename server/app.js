import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chatRouter from './routes/chat.js';
import { fileURLToPath } from 'url';
import path, { dirname } from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 獲取當前模組檔案的絕對路徑
const __filename = fileURLToPath(import.meta.url);
// 獲取當前模組檔案所在的目錄路徑
const __dirname = dirname(__filename);

// 靜態文件
const frontendPath = path.join(__dirname, "../dist");
// app.use(express.static('public'));
app.use(express.static(frontendPath));

// 路由
app.use('/api/chat', chatRouter);

const PORT = process.env.PORT
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running ${process.env.VITE_API_BASE_URL}`);
});