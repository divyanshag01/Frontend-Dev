// Q7. Banking Application

class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance.");
    }
    this.#balance -= amount;
    console.log(`Withdrawn: $${amount}. Remaining Balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

// Demonstrate functionality
const myAccount = new BankAccount(1000);

console.log(`Initial Balance: $${myAccount.getBalance()}`);

console.log("\n--- Valid Deposit ---");
myAccount.deposit(500);

console.log("\n--- Valid Withdrawal ---");
try {
  myAccount.withdraw(200);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

console.log("\n--- Invalid Withdrawal (Insufficient Funds) ---");
try {
  myAccount.withdraw(2000);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

console.log("\n--- Attempting to access private field directly ---");
try {
//   console.log(myAccount.#balance); // This will throw a SyntaxError or be undefined depending on environment strictness/support
} catch (error) {
  console.error("Cannot access private field #balance directly.");
}
