function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFailed = Math.random() < 0.2;

        setTimeout(() => {
            if (apiFailed) {
                reject("API Error: Unable to fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}
getBugs()
    .then(bugs => {
        console.log("Fetched Bugs:");
        console.table(bugs);
    })
    .catch(error => {
        console.error("Failed:", error);
    });
