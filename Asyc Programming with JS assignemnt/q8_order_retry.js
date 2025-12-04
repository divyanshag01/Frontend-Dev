// Order submission (50% failure)
function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5;
        setTimeout(() => {
            success ? resolve("Order submitted") : reject("Order failed");
        }, 500);
    });
}

// Retry up to 3 attempts
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return;
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

// Run with final handling
(async () => {
    try {
        await processOrder();
    } catch (error) {
        console.log("Final Error:", error.message);
    }
})();