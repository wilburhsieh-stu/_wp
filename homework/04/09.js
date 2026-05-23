const myData = { title: "JavaScript 學習", completed: false };

// 物件轉換成 JSON 字串 (模擬傳送資料給伺服器)
const jsonString = JSON.stringify(myData);
console.log("JSON 字串:", jsonString);

// JSON 字串轉換回 JS 物件 (模擬從伺服器接收資料)
const parsedObject = JSON.parse(jsonString);
console.log("還原後的物件屬性:", parsedObject.title);
