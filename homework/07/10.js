function checkAdmin(role, callback) {
    if (role !== "admin") {
        callback("Access Denied");
    } else {
        callback(null, "Welcome");
    }
}

// 測試：模擬權限錯誤的情境
checkAdmin("user", (err, message) => {
    if (err) return console.log("發生錯誤:", err); // 有錯誤就立刻 return 結束函數
    console.log("成功:", message);
});
// 輸出: 發生錯誤: Access Denied

// 測試：模擬權限正確的情境
checkAdmin("admin", (err, message) => {
    if (err) return console.log("發生錯誤:", err);
    console.log("成功:", message);
});
// 輸出: 成功: Welcome
