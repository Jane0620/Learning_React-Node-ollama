import fs from "fs";
import { fileURLToPath } from "url";
import path, {dirname} from "path";

// 獲取當前模組檔案的絕對路徑
const __filename = fileURLToPath(import.meta.url);
// 獲取當前模組檔案所在的目錄路徑
const __dirname = dirname(__filename);

// env路徑
const projectRoot = path.join(__dirname, "../../");
const envPath = path.join(projectRoot, ".env");

console.log(".env 檔案路徑:", envPath);

export async function resetPrompt(req, res){
    const {newPrompt} = req.body;

    // if(!newPrompt){
    //     return res.status(400).json({error:"需要新的提示詞"})
    // }

    try{
        // 1. 讀env檔
        let envCotent = fs.readFileSync(envPath, "utf8");
        let updatedEnvContent = "";
        let promptUpdated = false;

        // 2. 逐行處理&更新VITE_SYSTEM_PROMPT
        const lines = envCotent.split('\n');
        updatedEnvContent = lines.map(line => {
            if(line.startsWith(`VITE_SYSTEM_PROMPT`)){
            promptUpdated = true;
            return `VITE_SYSTEM_PROMPT=${newPrompt}`;
        }
        return line;
        }).join("\n");

        if (!promptUpdated){
            updatedEnvContent +=`\nVITE_SYSTEM_PROMPT=${newPrompt}`;
            console.warn("VITE_SYSTEM_PROMPT已重新添加。")
        }

        // 3. 寫回.env檔案
        fs.writeFileSync(envPath, updatedEnvContent, 'utf8');

        // 4. 重啟
        res.status(200).json({
            message:"VITE_SYSTEM_PROMPT已更新，可能須重啟伺服器。", 
            newPrompt: newPrompt
        });

    }catch(error){
        console.error("更新env失敗：", error);
        res.status(500).json({error:"無法更新VITE_SYSTEM_PROMPT"});
    }
}