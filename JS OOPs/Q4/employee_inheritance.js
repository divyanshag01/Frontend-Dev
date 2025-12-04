// Q4. Employee Inheritance

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department} department.`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override work method
  work() {
    console.log(
      `${this.name} is managing a team of ${this.teamSize} people in ${this.department}.`
    );
  }
}

// Create objects
const emp = new Employee("John Doe", "IT");
const mgr = new Manager("Jane Smith", "HR", 10);

// Demonstrate runtime polymorphism
console.log("--- Runtime Polymorphism ---");
const employees = [emp, mgr];

employees.forEach((employee) => {
  employee.work(); // Calls the appropriate method based on the object type
});
