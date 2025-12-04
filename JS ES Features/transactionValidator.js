const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },    
    null           
];
const validTransactions = [];
const invalidTransactions = [];
console.log("=== Transaction Validation Report ===");
for (let i = 0; i < transactions.length; i++) {
    try {
        const tx = transactions[i];
        if (tx === null) {
            throw new Error("Null transaction entry");
        }
        if (!("id" in tx) || !("amount" in tx)) {
            throw new Error("Missing id or amount");
        }
        if (typeof tx.amount !== "number") {
            throw new Error("Invalid amount type");
        }
        if (tx.amount < 0) {
            throw new Error("Negative transaction amount");
        }
        validTransactions.push(tx);
        console.log(`✔ Transaction ${tx.id} is valid.`);
    } catch (err) {
        invalidTransactions.push({
            transaction: transactions[i],
            error: err.message
        });
        console.log(`Error at index ${i}: ${err.message}`);
    }
}

console.log("\n=== FINAL SUMMARY ===");
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);