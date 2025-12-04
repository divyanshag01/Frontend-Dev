const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

for (let i = 0; i < departments.length; i++) {
  let grade;
  if (departments[i][1] >= 90) {
    grade = "Excellent";
  } else if (departments[i][1] >= 75 && departments[i][1] < 90) {
    grade = "Good";
  } else if (departments[i][1] >= 60 && departments[i][1] < 75) {
    grade = "Average";
  } else {
    grade = "Needs Improvement";
  }
  console.log(`Department: ${departments[i][0]}, Performance Grade: ${grade}`);
}
