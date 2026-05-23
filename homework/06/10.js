function calculateTotal(cart, discountFunc) {
  // 使用 reduce 加總陣列內所有數字，初始值設為 0
  const totalSum = cart.reduce((acc, curr) => acc + curr, 0);
  
  // 將總和交給 discountFunc 處理並回傳最終結果
  return discountFunc(totalSum);
}

const cartPrices = [100, 200, 300]; // 總和為 600

// 匿名函數將傳入的總額扣除 50
const finalPrice = calculateTotal(cartPrices, (total) => total - 50);

console.log(finalPrice); // 550
