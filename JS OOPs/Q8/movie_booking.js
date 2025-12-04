// Q8. Movie Ticket Booking System

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add method to prototype
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName}`);
  console.log(`Seat: ${this.seatNo}`);
  console.log(`Price: $${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }

  // Override printTicket to include total amount
  printTicket() {
    super.printTicket();
    console.log(`Convenience Fee: $${this.convenienceFee}`);
    console.log(`Total Amount: $${this.getTotalAmount()}`);
  }
}

// Demonstrate prototype chain working
console.log("--- Online Ticket Booking ---");
const ticket = new OnlineTicket("Avengers: Endgame", "A12", 12, 2);

// Calling the method from MovieTicket.prototype (via inheritance)
// Note: We overrode it in OnlineTicket, but it calls super.printTicket() which is on the prototype chain
ticket.printTicket();

console.log("\n--- Prototype Check ---");
console.log(
  `ticket instanceof OnlineTicket: ${ticket instanceof OnlineTicket}`
);
console.log(`ticket instanceof MovieTicket: ${ticket instanceof MovieTicket}`);
console.log(
  `OnlineTicket.prototype inherits from MovieTicket.prototype: ${
    Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
  }`
);
