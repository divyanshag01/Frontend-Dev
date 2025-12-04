// Q3. Monthly Expense Tracker

let expenses = [5000, 1500, 8000, 1200, 1000]; // [food, travel, rent, bills, leisure]

// Calculate total and average
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;

// Add 10% tax
let tax = total * 0.1;
let finalAmount = total + tax;

// Display formatted results
console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount (after 10% tax):", finalAmount.toFixed(2));
