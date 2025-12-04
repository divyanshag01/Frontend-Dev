"use strict";
// ---------------- Employee Class ----------------
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }
    // Annual Salary = salary × 12
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply Bonus (percent as number: e.g., 10 for 10%)
    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
    }
}
// ---------------- Employee List ----------------
const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "IT", 45000),
    new Employee(3, "Kiran", "Finance", 40000),
    new Employee(4, "Rahul", "Marketing", 35000),
    new Employee(5, "Mina", "IT", 50000)
];

// Apply bonus to each employee (example: 10%)
employees.forEach(emp => emp.applyBonus(10));

// Print annual salary for each employee
employees.forEach(emp => {
    console.log(`${emp.name} - Annual Salary: ₹${emp.getAnnualSalary()}`);
});

// Calculate company’s total annual payout using reduce()
const totalPayout = employees.reduce((sum, emp) => {
    return sum + emp.getAnnualSalary();
}, 0);

console.log("\n Total Annual Company Payout:", totalPayout);