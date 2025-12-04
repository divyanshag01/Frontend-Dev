// Server A: resolves in 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.2;

        setTimeout(() => {
            if (failed) reject("Server A failed!");
            else resolve("Server A: Deployment done.");
        }, 2000);
    });
}
// Server B: resolves in 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.2;

        setTimeout(() => {
            if (failed) reject("Server B failed!");
            else resolve("Server B: Deployment done.");
        }, 3000);
    });
}
// Promise.all → wait for both servers
Promise.all([serverA(), serverB()])
    .then(results => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.error("Error in deployment:", error);
    });

// Promise.race → first server to finish
Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.error("Fastest response ended with error:", error);
});