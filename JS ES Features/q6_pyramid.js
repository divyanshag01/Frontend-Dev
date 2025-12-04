const rows = 5;
console.log("=== PYRAMID PATTERN ===");
for (let i = 1; i <= rows; i++) {    
    let line = "";                   
    for (let j = 1; j <= i; j++) {    
        line += "* ";
    }
    console.log(line);
}