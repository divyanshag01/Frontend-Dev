// Async loading functions
function loadProfile() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Profile Failed") : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Posts Failed") : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Messages Failed") : resolve("Messages Loaded");
        }, 1000);
    });
}

// Track start time
const start = Date.now();

// Run all with allSettled
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach((result, index) => {
            const moduleName = ["Profile", "Posts", "Messages"][index];
            if (result.status === "fulfilled") {
                console.log(moduleName + " Success:", result.value);
            } else {
                console.log(moduleName + " Failed:", result.reason);
            }
        });

        const end = Date.now();
        console.log("Total time:", (end - start) + "ms");
});