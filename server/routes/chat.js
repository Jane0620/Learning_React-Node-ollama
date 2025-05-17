import express from 'express';
import { getChatResponse } from '../controllers/chatController';
const router = express.Router();

router.post("/", getChatResponse);