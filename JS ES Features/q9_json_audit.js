"use strict";
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

// Results containers
const clean = [];      // successfully parsed & validated objects
const errors = [];     // parse/validation errors with metadata
console.log("=== JSON AUDIT START ===");
for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;
  const raw = rawData[i];
  try {
    const parsed = JSON.parse(raw);
    if (!("user" in parsed) || !("age" in parsed)) {
      const missing = [];
      if (!("user" in parsed)) missing.push("user");
      if (!("age" in parsed)) missing.push("age");
      throw new Error(`Missing keys: ${missing.join(", ")}`);
    }
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) {
      throw new Error("Invalid age value (not a number)");
    }
    parsed.age = ageNum;
    clean.push(parsed);
    console.log(`Line ${lineNumber}: Parsed OK ->`, parsed);
  } catch (err) {
    const errorEntry = {
      line: lineNumber,
      raw,
      message: err.message
    };
    errors.push(errorEntry);
    console.log(`Line ${lineNumber}: ERROR ->`, err.message);
  }
}
const adults = clean.filter(item => item.age >= 18);
console.log("\n=== SUMMARY ===");
console.log("Clean entries:", clean);
console.log("Adults (>=18):", adults);
console.log("Errors:", errors);
console.log(`Total lines: ${rawData.length}, Clean: ${clean.length}, Errors: ${errors.length}`);
console.log("=== JSON AUDIT END ===");