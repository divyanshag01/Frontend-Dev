const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];
        // Validation
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing employee fields");
        }
        // Convert to number — may throw
        const salary = Number(emp.salary);
        const years = Number(emp.years);
        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Invalid numeric conversion");
        }
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`
        Employee: ${emp.name}
        Salary: ₹${salary}
        Years: ${years}
        Bonus Earned: ₹${bonus}
        -------------------------------`);
        }
    catch (err) {
        console.log(`Error for employee ${employees[i]?.name}:`, err.message);
    }
}