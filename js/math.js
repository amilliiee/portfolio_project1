/*
// Function to perform arithmetic operations
function calculate(operation, num1, num2) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero";
      }
    default:
      return "Invalid operation";
  }
}

// Generate two random numbers for addition
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

// Prompt the user to choose an operation
let operation = prompt(
  "Choose an operation: add, subtract, multiply, or divide"
);

// Ask the user for input
let userAnswer = prompt(`What is the result of ${num1} ${operation} ${num2}?`);

// Calculate the correct answer using the function
let correctAnswer = calculate(operation, num1, num2);

// Check if the user's answer is correct
if (parseFloat(userAnswer) === correctAnswer) {
  alert("Correct!");
} else {
  alert(`Incorrect. The correct answer is ${correctAnswer}.`);
}

*/