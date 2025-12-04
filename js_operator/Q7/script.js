let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordsCount = feedback.split(" ").length;
console.log("Word Count:", wordsCount);

let checkFeedback = feedback.includes("bad") || feedback.includes("poor");

if (checkFeedback) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
