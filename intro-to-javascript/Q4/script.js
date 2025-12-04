// Q4. Academic Performance Evaluator

let marks = [85, 72, 90, 88, 95]; // Marks for 5 subjects

// Check if any subject < 35
if (marks.some((mark) => mark < 35)) {
  console.log("Detained (one or more subjects below 35)");
} else {
  let total = marks.reduce((sum, val) => sum + val, 0);
  let average = total / marks.length;
  let percentage = average;

  if (percentage >= 85) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}
