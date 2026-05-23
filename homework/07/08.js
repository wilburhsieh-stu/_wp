let user = "Guest";

// 寫法一：使用三元運算子
let htmlStr = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;

// 寫法二：更簡潔的邏輯或 (||) 寫法
// let htmlStr = `<h1>Welcome, ${user || "Stranger"}</h1>`;

console.log(htmlStr); // 輸出: <h1>Welcome, Guest</h1>
