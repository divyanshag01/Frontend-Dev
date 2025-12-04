// Q6. E-Commerce Inventory System

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 5 },
  { id: 2, name: "Headphones", category: "Electronics", price: 150, stock: 15 },
  { id: 3, name: "T-Shirt", category: "Apparel", price: 25, stock: 50 },
  { id: 4, name: "Jeans", category: "Apparel", price: 60, stock: 8 },
  { id: 5, name: "Coffee Maker", category: "Appliances", price: 80, stock: 2 },
];

// 1. getLowStockProducts() → using filter()
function getLowStockProducts(products, threshold = 10) {
  return products.filter((product) => product.stock < threshold);
}

// 2. sortProductsByPrice() → using sort()
function sortProductsByPrice(products) {
  // Create a copy to avoid mutating the original array
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. calculateTotalInventoryValue() → using reduce()
function calculateTotalInventoryValue(products) {
  return products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );
}

// 4. groupByCategory() → using reduce() + object grouping
function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
}

// Test the functions
console.log("--- Low Stock Products (Stock < 10) ---");
console.log(getLowStockProducts(products));

console.log("\n--- Products Sorted by Price ---");
console.log(sortProductsByPrice(products));

console.log("\n--- Total Inventory Value ---");
console.log(`$${calculateTotalInventoryValue(products)}`);

console.log("\n--- Products Grouped by Category ---");
console.log(groupByCategory(products));
