// Wrong: this will NOT work
const user = {
    name: "yash",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined

// Correct: this works properly
const userFixed = {
    name: "yash",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName(); // Seema
