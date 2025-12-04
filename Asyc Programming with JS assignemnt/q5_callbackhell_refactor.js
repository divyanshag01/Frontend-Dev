// Callback-based stages
function design(callback) {
    setTimeout(() => {
        console.log("Stage 1: Design completed.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Stage 2: Build completed.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Stage 3: Test completed.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Stage 4: Deploy completed.");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Stage 5: Celebrate!");
        callback();
    }, 1000);
}

// Callback hell demo
console.log("=== CALLBACK HELL START ===");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline completed (callback hell).");
                });
            });
        });
    });
});

// Promise-based delay
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async/await stages
async function designAsync() {
    await wait(1000);
    console.log("Stage 1: Design completed.");
}

async function buildAsync() {
    await wait(1000);
    console.log("Stage 2: Build completed.");
}

async function testAsync() {
    await wait(1000);
    console.log("Stage 3: Test completed.");
}

async function deployAsync() {
    await wait(1000);
    console.log("Stage 4: Deploy completed.");
}

async function celebrateAsync() {
    await wait(1000);
    console.log("Stage 5: Celebrate!");
}

// Async/await pipeline
async function runPipeline() {
    console.log("=== ASYNC/AWAIT START ===");
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    console.log("Pipeline completed (async/await).");
}

runPipeline();