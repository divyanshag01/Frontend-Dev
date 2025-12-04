const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let total = 0;
for (let i = 0; i < cart.length; i++) {
  let discount = 0;
  if (cart[i].category === "electronics") {
    discount = 0.1;
  } else if (cart[i].category === "fashion") {
    discount = 0.05;
  }
  total += cart[i].price * (1 - discount);
}

if (total > 50000) {
  total = total * 0.05;
}
console.log("Total amount to be paid: ₹" + total);

// Now using for each loop
total = 0;

cart.forEach((product) => {
  let discount = 0;
  if (product.category === "electronics") {
    discount = 0.1;
  } else if (product.category === "fashion") {
    discount = 0.05;
  }
  total += product.price * (1 - discount);
});

if (total > 50000) {
  total = total * 0.05;
}
console.log("Total amount to be paid using forEach: ₹" + total);
