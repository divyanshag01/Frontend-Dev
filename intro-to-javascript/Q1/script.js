// Q1. Personalized Login Greeting

// Declare variables
let Name = "Ayushman";
let currentHour = new Date().getHours(); // Get current hour (0–23)
let greeting = "";

// Time-based conditions
if (currentHour < 12) {
  greeting = `Good Morning ${Name}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = `Good Afternoon ${Name}!`;
} else {
  greeting = `Good Evening ${Name}!`;
}

console.log(greeting);
