//Concept (5 pts): Why do we use Number(prompt()) instead of just prompt() when doing math or numeric comparisons?

// To convert the user input from string into a number.

//Operators (10 pts): In one sentence each, explain the difference between: == vs === and > vs >=
// == compares two values and can convert the data types, while === compares both the value and data type.
// > means greater than, while >= means greater than or equal to.


//Debug (10 pts): Fix this snippet so it correctly prints “A” for scores ≥ 90, “B” for ≥ 80, otherwise “Keep going,” using strict equality where relevant:
// Broken code — explain changes in comments, then rewrite correctly below

// let score = prompt("Score?");
// if (score >= "90") {
//   console.log("A");
// } else if (score == "80") {
//   console.log("B");
// } else {
//   console.log("Keep going")
// }

let score = Number(prompt("Score?")); // Number added to convert user input from string to number
if (score >= 90) { // Removed quotes around 90 because we are now comparing numbers instead of strings
  console.log("A");
} else if (score >= 80) { // Removed quotes around 80 because we are now comparing numbers instead of strings. Changed from == to >= to match the grading logic
  console.log("B");
} else {
  console.log("Keep going"); // Added ; to terminate the statement. "Keep Going" will ask the user to continue working hard
}
