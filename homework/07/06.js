const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';

// 將 JSON 字串轉為 JS 物件
let obj = JSON.parse(jsonStr);

// 印出 tags 陣列的第二個元素 (索引值為 1)
console.log(obj.tags[1]); // 輸出: node
