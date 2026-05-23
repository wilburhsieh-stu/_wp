const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";

posts.forEach(post => {
  // 使用反引號 (Template Literals) 進行字串拼接
  html += `<div>${post.t}</div>\n`; 
});

console.log(html);
// 輸出預期：
// <div>A</div>
// <div>B</div>
