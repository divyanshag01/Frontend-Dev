// Q8. Employee Salary Projection

let currentSalary = 50000;
let incrementRate = 10; // in %
let salaryTable = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100; // yearly increment
  salaryTable.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaryTable);
