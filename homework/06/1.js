const post = { 
  id: 1, 
  title: "Hello World", 
  content: "Markdown content" 
};

// 方式一：點符號 (Dot notation) - 最常見
console.log(post.title); 

// 方式二：中括號 (Bracket notation) - 適合用在屬性名稱為動態變數時
console.log(post["title"]);
