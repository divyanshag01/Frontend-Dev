// Q1. Student Result Processing (reduce + Classes)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    return "F";
  }

  printResult() {
    console.log(`Student: ${this.name}`);
    console.log(`Average Marks: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log("-------------------------");
  }
}

// Test the class for 3 students
const student1 = new Student("Alice", [85, 90, 92, 88, 95]);
const student2 = new Student("Bob", [70, 75, 80, 65, 72]);
const student3 = new Student("Charlie", [50, 60, 55, 45, 58]);

student1.printResult();
student2.printResult();
student3.printResult();
