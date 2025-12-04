// Q9. Random Math Quiz Generator

let num1 = Math.trunc(Math.random() * 20) + 1;
let num2 = Math.trunc(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = num1 + num2;
    break;
  case "-":
    correctAnswer = num1 - num2;
    break;
  case "*":
    correctAnswer = num1 * num2;
    break;
  case "/":
    correctAnswer = (num1 / num2).toFixed(2);
    break;
}

console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
