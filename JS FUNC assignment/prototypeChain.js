// Level 1
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
};

// Level 2
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

// Level 3
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

// testing chain
const prof = new Professor("Dr. yash", "CSE", "AI/ML");

prof.sayHello();        // from Person
prof.showDepartment();  // from Faculty
prof.showSubject();     // from Professor
