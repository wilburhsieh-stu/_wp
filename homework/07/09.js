const postsContent = [
  "Very long content here", 
  "Another Very long content here", 
  "3rd Very long content here"
];

// 針對每個字串切片並加上 "..."
const summaries = postsContent.map(text => {
  return text.substring(0, 10) + "...";
});

console.log(summaries); 
// 輸出: [ 'Very long ...', 'Another Ve...', '3rd Very l...' ]
