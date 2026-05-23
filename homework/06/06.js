function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 只有當 callback 判斷為 true 時，才推入新陣列
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const testArray = [1, 5, 8, 12];
const filtered = myFilter(testArray, (item) => item > 7);

console.log(filtered); // [8, 12]
