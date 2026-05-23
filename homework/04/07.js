const students = [
  { name: "Tom", score: 45 },
  { name: "Jerry", score: 88 },
  { name: "Spike", score: 92 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    console.log(`${students[i].name} 通過了考試。`);
  }
}
