let scoreAmount = 0;
let scoreCounter = `Score: ${scoreAmount}/10`;
document.getElementById("Counter").innerHTML = scoreCounter;

let questionNumber = 1;
document.getElementById(
	"numberOfQuestions"
).innerHTML = `Question Number # ${questionNumber}`;

let inputField = document.getElementById("textInput").value;

//Loop Code

for (i = 1; i < 11; i++) {
	// Generate two random numbers for addition
	let num1 = Math.floor(Math.random() * 10);
	let num2 = Math.floor(Math.random() * 10);

	// Prompt the user to choose an operation
	let operation = prompt(
		"Choose an operation: add, subtract, multiply, or divide"
	);

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

	// Ask the user for input
	//let userAnswer = `What is the result of ${num1} ${operation} ${num2}?`;

	document.getElementById(
		"questionPromt"
	).innerHTML = `What is the result of ${num1} ${operation} ${num2}?`;

	// Calculate the correct answer using the function
	let correctAnswer = calculate(operation, num1, num2);

	
}

// Check if the user's answer is correct
function checkAns() {
  correctAnswer = String(correctAnswer);
  console.log(`This is The correct Answer: ${correctAnswer}`);
  console.log(`This is Text Input Variable: ${inputField}`);
  console.log(typeof correctAnswer);
  console.log(
    `This is Text Input Raw: ${
      document.getElementById("textInput").value
    }`
  );

  if (document.getElementById("textInput").value == correctAnswer) {
    alert("Correct!");
    scoreAmount++;
    console.log("Score Amount is" + scoreAmount);
  } else {
    alert(`Incorrect. The correct answer is ${correctAnswer}.`);
  }
  questionNumber++;
  console.log("Question Number is" + questionNumber);
}
