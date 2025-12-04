//m-1
"use strict";
function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}
// 'score' was undefined before, now properly assigned before usage
var score = 50;
console.log(score);
announce();
// FIX: initialize 'status' BEFORE startGame() call
let status = "ready";
startGame();

//m-2
/*
Arrow functions are NOT hoisted (behave like let/const variables)
You cannot call them before declaration.
*/

const announce = () => {
    console.log("Game started");
};

const startGame = () => {
    console.log(status);
};

// Proper order
var score = 50;
console.log(score);

announce();

// let status = "ready";

startGame();