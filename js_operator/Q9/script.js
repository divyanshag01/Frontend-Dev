let arrayToTransform = [];
let display = [];
for (let i = 1; i <= 30; i++) {
  arrayToTransform.push(i);
  if (i % 3 === 0 && i % 5 === 0) {
    display.push("FizzBuzz");
  } else if (i % 2 == 0) {
    display.push("Even");
  } else {
    display.push("Odd");
  }
}
console.log("Array: ", arrayToTransform);
console.log("Display: ", display);
