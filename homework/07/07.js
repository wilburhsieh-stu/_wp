// 1. 實作模擬資料庫查詢的函數
function fakeGet(sql, params, callback) {
    const fakeRow = { 
        id: 1, 
        title: "掌握 JavaScript 函數", 
        content: "這是一篇關於 Callback 的文章..." 
    };
    
    // 模擬查完資料庫，執行 callback 將資料拋出
    callback(null, fakeRow);
}

// 2. 測試呼叫
const query = "SELECT * FROM posts WHERE id = ?";
const inputParams = [1];

fakeGet(query, inputParams, (err, row) => {
    if (err) {
        console.error("查詢失敗");
    } else {
        // 從 row 物件中提取 title
        console.log("抓到的文章標題是：", row.title); 
        // 輸出: 抓到的文章標題是： 掌握 JavaScript 函數
    }
});
