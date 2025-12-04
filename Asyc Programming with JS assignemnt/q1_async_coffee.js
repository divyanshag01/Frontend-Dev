// Step 1: Boil water (1–2 sec delay)
function boilWater() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Boiling failed!");
            console.log("Water boiled.");
            resolve();
        }, time);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Brewing failed!");
            console.log("Coffee brewed.");
            resolve();
        }, time);
    });
}

// Step 3: Pour into cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("Pouring failed!");
            console.log("Coffee poured into cup.");
            resolve();
        }, time);
    });
}

// Final Process using Promise chaining
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Process failed:", error));
