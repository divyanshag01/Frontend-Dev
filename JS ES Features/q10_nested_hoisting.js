"use strict";
function outer_original() {
  console.log("outer_original - before var count:", typeof count !== "undefined" ? count : "undefined");
  var count = 5;
  function inner() {
    console.log("inner_original - before var count in inner:", typeof count !== "undefined" ? count : "undefined");
    var count = 10;
    console.log("inner_original - after assignment in inner:", count);
  }
  inner();
  console.log("outer_original - after inner, outer count:", count);
}
console.log(">>> Running original version (expected: undefined, undefined):");
outer_original();
function outer_arrow_shadow() {
  console.log("outer_arrow_shadow - before var count:", typeof count !== "undefined" ? count : "undefined");
  var count = 5;
  const innerArrow = () => {
    console.log("innerArrow (shadow) - before var count in innerArrow:", typeof count !== "undefined" ? count : "undefined");
    var count = 10;
    console.log("innerArrow (shadow) - after assignment:", count);
  };
  innerArrow();
  console.log("outer_arrow_shadow - after innerArrow, outer count:", count);
}
console.log("\n>>> Running arrow (shadow) version:");
outer_arrow_shadow();
function outer_arrow_use_outer() {
  console.log("outer_arrow_use_outer - before var count:", typeof count !== "undefined" ? count : "undefined");
  var count = 5;
  const innerArrow = () => {
    console.log("innerArrow (use outer) - sees outer count:", count);
  };
  innerArrow();
  console.log("outer_arrow_use_outer - after innerArrow, outer count:", count);
}
console.log("\n>>> Running arrow (use outer) version:");
outer_arrow_use_outer();