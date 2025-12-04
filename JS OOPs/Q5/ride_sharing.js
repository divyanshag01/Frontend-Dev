// Q5. Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    try {
      if (this.distance === undefined || this.distance === null) {
        throw new Error("Distance is required for fare calculation.");
      }
      if (this.distance < 0) {
        throw new Error("Distance cannot be negative.");
      }

      const baseFare = 50;
      const ratePerKm = 10;
      const totalFare = baseFare + this.distance * ratePerKm;

      console.log(`Trip from ${this.fromLocation} to ${this.toLocation}`);
      console.log(`Distance: ${this.distance} km`);
      console.log(`Total Fare: $${totalFare}`);
      return totalFare;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
}

// Test Scenarios
console.log("--- Valid Trip ---");
const trip1 = new Trip("Downtown", "Airport", 15);
trip1.calculateFare();

console.log("\n--- Invalid Distance (Negative) ---");
const trip2 = new Trip("Home", "Office", -5);
trip2.calculateFare();

console.log("\n--- Missing Distance ---");
const trip3 = new Trip("Mall", "Park");
trip3.calculateFare();
