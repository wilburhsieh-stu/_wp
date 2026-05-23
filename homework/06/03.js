const prices = [100, 200, 300, 400];

// 單行箭頭函數自動回傳計算結果
const discountedPrices = prices.map(price => price * 0.8);

console.log(discountedPrices); // [80, 160, 240, 320]
