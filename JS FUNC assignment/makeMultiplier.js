function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;   // closure in action
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15