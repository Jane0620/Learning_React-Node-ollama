import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chatRouter from './routes/chat.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 靜態文件
// app.use(express.static('public'));
app.use('/dist', express.static('dist'));

// 路由
app.use('/api/chat', chatRouter);

const PORT = process.env.PORT
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running ${process.env.VITE_API_BASE_URL}: ${PORT}`);
});