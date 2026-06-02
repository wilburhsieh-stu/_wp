// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 解析 JSON 請求並提供靜態網頁檔案
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 記憶體內的排行榜資料 (預設塞入幾筆假資料)
let leaderboard = [
    { name: "FlickGod", score: 45 },
    { name: "SmoothAim", score: 38 },
    { name: "Noob", score: 12 }
];

// 取得排行榜 (回傳前 10 名)
app.get('/api/leaderboard', (req, res) => {
    // 依分數降冪排序
    const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
    res.json(sortedLeaderboard);
});

// 上傳新分數
app.post('/api/score', (req, res) => {
    const { name, score } = req.body;
    
    if (!name || typeof score !== 'number') {
        return res.status(400).json({ error: "無效的資料格式" });
    }

    // 限制名稱長度，避免破壞版面
    const safeName = name.trim().substring(0, 12) || "Anonymous";
    
    leaderboard.push({ name: safeName, score: score });
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`遊戲伺服器已啟動: http://localhost:${PORT}`);
});