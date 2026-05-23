function mathTool(num1, num2, action) {
  return action(num1, num2);
}

// 傳入匿名函數進行相加
const addResult = mathTool(10, 5, function(a, b) {
  return a + b;
});
console.log(addResult); // 15

// 使用箭頭函數寫法會更簡潔
const subResult = mathTool(10, 5, (a, b) => a - b);
console.log(subResult); // 5
