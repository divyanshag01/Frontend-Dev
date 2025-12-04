let arr = [31, 42, 56, 39, 45, 67, 78, 90];
let highest = Math.max(...arr);
let lowest = Math.min(...arr);
let average = arr.reduce((a, b) => a + b, 0) / arr.length;

let passedStudents = arr.filter((marks) => marks >= 50).length;

console.log(`Performance Dashboard:
    Highest Marks: ${highest}
    Lowest Marks: ${lowest}
    Average Marks: ${average.toFixed(2)}
    Number of Students Passed: ${passedStudents}`);
