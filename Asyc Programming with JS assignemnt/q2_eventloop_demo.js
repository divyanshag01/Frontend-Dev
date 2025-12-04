console.log("Start");

// Macrotask: setTimeout
setTimeout(() => {
    console.log("Macrotask: setTimeout executed");
}, 0);

// Microtask: Promise.then()
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then executed");
});

console.log("Synchronous log");

// Why this order?
// 1. "Start" (sync)
// 2. "Synchronous log" (sync)
// 3. Microtasks run BEFORE macrotasks → Promise.then executes here
// 4. Macrotask executes → setTimeout callback
console.log("End");