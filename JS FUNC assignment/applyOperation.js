function applyOperation(numbers, operation) {
    const result = [];

    for (let num of numbers) {
        result.push(operation(num));  // callback use
    }

    return result;
}
const double = n => n * 2;
const square = n => n * n;
console.log(applyOperation([1, 2, 3, 4], double)); // [2,4,6,8]
console.log(applyOperation([1, 2, 3, 4], square)); // [1,4,9,16]