import express from "express";
import { resetPrompt} from "../controllers/setPrompt.js";

const router = express.Router();

router.post("/", resetPrompt);

export default router;