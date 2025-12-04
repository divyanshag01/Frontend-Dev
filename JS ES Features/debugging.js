"use strict";
/*WHY ERROR?
Because "greeting" is used without declaration.
In strict mode, undeclared variables are NOT allowed.
It throws: ReferenceError: greeting is not defined
*/

function showMessage() {
    // greeting = "Welcome";
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();