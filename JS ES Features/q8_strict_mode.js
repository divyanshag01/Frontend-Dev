// --- Without strict mode (NO error for duplicate params / global leak) ---
function demo(a, a) {   // duplicate parameter allowed (unsafe)
    total = 10;         // undeclared → implicit global
    // delete total;       // deletion of global variables allowed
}
demo(5, 10);

// --- With strict mode (ERRORS occur) ---
"use strict";

function demo2(a, a) {  // SyntaxError: Duplicate parameter name not allowed in strict mode
    total = 10;         // ReferenceError (implicit global not allowed)
    // delete total;       // SyntaxError: Cannot delete variable
}