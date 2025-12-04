// Q3. Product Discount System

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Add method to prototype
Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

Product.prototype.printDetails = function () {
  console.log(`Product: ${this.name}, Price: $${this.price}`);
};

// Create 3 products
const p1 = new Product("Laptop", 1000);
const p2 = new Product("Phone", 500);
const p3 = new Product("Headphones", 100);

// Apply different discounts
console.log("--- Product Discounts ---");

p1.printDetails();
const p1Discounted = p1.applyDiscount(10); // 10% off
console.log(`Price after 10% discount: $${p1Discounted}`);

p2.printDetails();
const p2Discounted = p2.applyDiscount(20); // 20% off
console.log(`Price after 20% discount: $${p2Discounted}`);

p3.printDetails();
const p3Discounted = p3.applyDiscount(50); // 50% off
console.log(`Price after 50% discount: $${p3Discounted}`);

console.log(
  "\nAbstraction: The internal calculation of the discount is hidden from the user. They simply call applyDiscount(percent) and get the result."
);
