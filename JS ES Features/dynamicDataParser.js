const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];
console.log("=== Dynamic Data Parser Report ===");
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    // Convert to different types
    const toNumber = Number(value);
    const toBoolean = Boolean(value);
    const toString = String(value);
    console.log(`\nOriginal:`, value);
    console.log(`As Number:`, toNumber);
    console.log(`As Boolean:`, toBoolean);
    console.log(`As String:`, toString);

    // Check for invalid numbers (NaN or non-convertible)
    if (Number.isNaN(toNumber)) {
        console.log("Invalid number detected!");
        invalidNumbers.push(value);
        continue;
    }
    // Valid numeric values
    validNumbers.push(toNumber);
}

console.log("\n\n=== SUMMARY ===");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);