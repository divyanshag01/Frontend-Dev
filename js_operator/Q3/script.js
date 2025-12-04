let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let RandomNum = Math.trunc(Math.random() * (50 - 10 + 1) + 10);

console.log(`Math Dashboard:
    Rounded Value: ${rounded}
    Square Root: ${squareRoot}
    Power (x^3): ${power}
    Random Number (10-50): ${RandomNum}
    `);
