// Generate a random delay between 1–2 seconds
function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

// Each step returns a Promise that may succeed or fail
function takeOrder() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Order taking failed") : resolve("Step 1: Order taken");
        }, randomDelay());
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Preparation failed") : resolve("Step 2: Food prepared");
        }, randomDelay());
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Packing failed") : resolve("Step 3: Package ready");
        }, randomDelay());
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Dispatch failed") : resolve("Step 4: Out for delivery");
        }, randomDelay());
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Delivery failed") : resolve("Delivery completed!");
        }, randomDelay());
    });
}

// Async pipeline using async/await
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Await pauses execution until Promise resolves
        // If rejected, control jumps to catch block immediately
        const step1 = await takeOrder();
        console.log(step1);

        const step2 = await prepare();
        console.log(step2);

        const step3 = await pack();
        console.log(step3);

        const step4 = await dispatch();
        console.log(step4);

        const finalStep = await deliver();
        console.log(finalStep);

    } catch (error) {
        // Any failure from any step lands here
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}

// Run the pipeline
runPipeline();