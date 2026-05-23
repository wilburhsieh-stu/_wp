// 模擬從伺服器取得的 JSON 字串
const jsonResponse = `[
  {"id": 1, "name": "Alice", "isActive": true},
  {"id": 2, "name": "Bob", "isActive": false},
  {"id": 3, "name": "Charlie", "isActive": true}
]`;

function getActiveUserNames(jsonStr) {
  // 1. JSON parse 解析成 Array of Objects
  const users = JSON.parse(jsonStr); 
  const activeNames = []; // 準備一個空陣列放結果
  let i = 0;

  // 2. 使用 while 迴圈 (也可以用 for)
  while (i < users.length) {
    // 3. 使用 if 判斷物件屬性
    if (users[i].isActive === true) {
      activeNames.push(users[i].name);
    }
    i++;
  }
  
  return activeNames;
}

const result = getActiveUserNames(jsonResponse);
console.log("有效使用者名單:", result);
