// 1. 定義 fetchData 函數
function fetchData(id, callback) {
    const fakeData = { id: id, status: "success" };
    
    // 執行 callback，第一個參數代表 error (沒錯誤傳 null)，第二個參數代表 data
    callback(null, fakeData);
}

// 2. 執行 fetchData 並處理結果
fetchData(101, (err, data) => {
    if (err) {
        console.log("發生錯誤：" + err);
    } else {
        console.log("成功取得資料：", data); 
        // 輸出: 成功取得資料： { id: 101, status: 'success' }
    }
});
