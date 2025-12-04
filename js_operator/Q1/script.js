let bonus = 5000;
function calculateSalary(isPermanent) {
  let salary = 40000;
  if (isPermanent) {
    salary += bonus;
  }
  console.log("Salary: ", salary);
}
calculateSalary(true);
calculateSalary(false);
