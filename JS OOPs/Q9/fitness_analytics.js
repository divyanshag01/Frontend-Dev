// Q9. Fitness App Analytics

class FitnessAnalytics {
  constructor(data) {
    this.data = data;
  }

  getActiveUsers() {
    if (!this.data || this.data.length === 0) {
      throw new Error("Dataset is empty.");
    }
    // Users with steps > 7000
    return this.data
      .filter((user) => user.steps > 7000)
      .map((user) => user.user);
  }

  getAverageCalories() {
    if (!this.data || this.data.length === 0) {
      throw new Error("Dataset is empty.");
    }
    const totalCalories = this.data.reduce(
      (sum, user) => sum + user.calories,
      0
    );
    return totalCalories / this.data.length;
  }

  getUserSummary() {
    if (!this.data || this.data.length === 0) {
      throw new Error("Dataset is empty.");
    }
    return this.data.map(
      (user) =>
        `User ${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
    );
  }
}

// Given user workout data
const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

// Execute all methods
console.log("--- Fitness Analytics ---");
try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log("Active Users (Steps > 7000):");
  console.log(analytics.getActiveUsers());

  console.log("\nAverage Calories Burned:");
  console.log(analytics.getAverageCalories().toFixed(2));

  console.log("\nUser Summary:");
  analytics.getUserSummary().forEach((summary) => console.log(summary));
} catch (error) {
  console.error(`Error: ${error.message}`);
}

console.log("\n--- Empty Dataset Test ---");
try {
  const emptyAnalytics = new FitnessAnalytics([]);
  emptyAnalytics.getActiveUsers();
} catch (error) {
  console.error(`Error: ${error.message}`);
}
