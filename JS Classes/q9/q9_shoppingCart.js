"use strict";
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }
    applyCoupon(code) {
        const reg = /^(SAVE|DISC)(\d{1,2})$/;   // e.g., SAVE20, DISC10
        const match = code.match(reg);
        if (!match) {
            return { success: false, message: "Invalid coupon format!" };
        }
        const discountPercent = Number(match[2]);
        const total = this.getTotal();
        const discounted = total - (total * discountPercent) / 100;
        return {
            success: true,
            original: total,
            discount: discountPercent,
            final: discounted
        };
    }
}
const cart = new Cart();
// Add sample items
function addSampleItems() {
    cart.addItem("Shoes", 1500, 1);
    cart.addItem("T-Shirt", 500, 2);
    cart.addItem("Jeans", 1200, 1);
    document.getElementById("result").innerText =
        "Items added! Enter coupon to calculate total.";
}

// Apply coupon
function applyCoupon() {
    const code = document.getElementById("coupon").value.trim();
    const response = cart.applyCoupon(code);
    if (!response.success) {
        document.getElementById("result").innerText = response.message;
        return;
    }
    document.getElementById("result").innerText =
        `Original Total: ₹${response.original}
        Discount: ${response.discount}%
        Final Total: ₹${response.final}`;
}