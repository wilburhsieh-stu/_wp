const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };

// 一行程式碼解構出 title 與 content
const { title, content } = req.body;

console.log(title);   // 輸出: JS教學
console.log(content); // 輸出: 內容在此
