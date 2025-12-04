// Q2. Online Food Ordering (map + Error Handling)

const menu = [
  { id: 1, name: "Pizza", price: 12.99 },
  { id: 2, name: "Burger", price: 8.99 },
  { id: 3, name: "Pasta", price: 10.99 },
  { id: 4, name: "Salad", price: 7.99 },
];

function calculateBill(orderItems) {
  try {
    if (!orderItems || orderItems.length === 0) {
      throw new Error("Order cannot be empty.");
    }

    const prices = orderItems.map((itemName) => {
      const item = menu.find(
        (m) => m.name.toLowerCase() === itemName.toLowerCase()
      );
      if (!item) {
        throw new Error(`Item '${itemName}' not found on the menu.`);
      }
      return item.price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);

    console.log(`Order: ${orderItems.join(", ")}`);
    console.log(`Total Bill: $${total.toFixed(2)}`);
    return total;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Test Cases
console.log("--- Valid Order ---");
calculateBill(["Pizza", "Pasta"]);

console.log("\n--- Invalid Item Order ---");
calculateBill(["Burger", "Sushi"]);

console.log("\n--- Empty Order ---");
calculateBill([]);
