// Q10. Citizen Eligibility Validator

let umar = 19;
let isCitizen = true;

if (isCitizen && umar >= 18) {
  if (umar >= 21) {
    console.log("Eligible for all services.");
  } else {
    console.log("Eligible to vote only.");
  }
} else if (!isCitizen && umar >= 18) {
  console.log("Only umar criteria met.");
} else {
  console.log("Not eligible yet.");
}
