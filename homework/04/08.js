const tasks = ["寫程式", "開會", "回信件"];

// 當任務陣列裡面還有東西時
while (tasks.length > 0) {
  // 移除並取出最後一個任務
  const currentTask = tasks.pop(); 
  console.log(`正在處理: ${currentTask}`);
}
console.log("所有任務已完成！");
