"use strict";
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price -= discountAmount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}
const products = [
    new Product(1, "Smartphone", 15000, "Electronics"),
    new Product(2, "Shoes", 999, "Fashion"),
    new Product(3, "Headphones", 1200, "Electronics"),
    new Product(4, "Laptop Bag", 750, "Accessories")
];
products.forEach(p => p.applyDiscount(10));
console.log("=== All Products After Discount ===");
products.forEach(p => console.log(p.getDetails()));
const premiumProducts = products.filter(p => p.price > 1000);
console.log("\n=== Products With Price > 1000 ===");
premiumProducts.forEach(p => console.log(p.getDetails()));