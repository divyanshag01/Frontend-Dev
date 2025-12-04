// Q2. Multi-Type Data Summary

let userName = "Ayushman"; // string
let age = 21; // number
let isStudent = true; // boolean
let subjects = ["Java", "Python", "DSA"]; // array
let profile = { university: "GLA", year: 3 }; // object
let hobby = null; // null
let futurePlan; // undefined

// Create report
let dataSummary = [
  { Label: "Name", Value: userName, Type: typeof userName },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
  {
    Label: "Subjects",
    Value: subjects,
    Type: Array.isArray(subjects) ? "array" : typeof subjects,
  },
  { Label: "Profile", Value: profile, Type: typeof profile },
  { Label: "Hobby", Value: hobby, Type: typeof hobby },
  { Label: "Future Plan", Value: futurePlan, Type: typeof futurePlan },
];

console.table(dataSummary);
