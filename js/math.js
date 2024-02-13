//created some global variables that can be accessed everywhere -Melanie

let scoreAmount = 0;
let scoreDiv = document.getElementById("Counter"); //gave this a variable -Melanie
let questionDiv = document.getElementById("numberOfQuestions"); //gave this a variable as well -Melanie
let correctAnswer;
let questionNumber = 1;
let winPage = "/portfolio-win-page.html";
let operation = "";

function game() {
	if (scoreAmount === 0) {
		//for intial update of numbers -Melanie
		scoreDiv.innerHTML = `Score: ${scoreAmount}/10`;
		questionDiv.innerHTML = `Question Number # ${questionNumber}`;
	}
	// Generate two random numbers for addition
	let num1 = Math.floor(Math.random() * 10);
	let num2 = Math.floor(Math.random() * 10);

	// Prompt the user to choose an operation
	operation = prompt(
		"Choose an operation: add, subtract, multiply, or divide"
	);

	// Ask the user for input
	//let userAnswer = `What is the result of ${num1} ${operation} ${num2}?`;

	document.getElementById(
		"questionPromt"
	).innerHTML = `What is the result of ${num1} ${operation} ${num2}?`;

	// Calculate the correct answer using the function
	correctAnswer = calculate(operation, num1, num2);
}
// Check if the user's answer is correct
function checkAns() {
	let inputField = document.getElementById("textInput").value;

	correctAnswer = String(correctAnswer);
	console.log(`This is The correct Answer: ${correctAnswer}`);
	console.log(`This is Text Input Variable: ${inputField}`);
	console.log(typeof correctAnswer);
	console.log(
		`This is Text Input Raw: ${document.getElementById("textInput").value}`
	);

	if (document.getElementById("textInput").value == correctAnswer) {
		alert("Correct!");
		scoreAmount++;
		console.log("Score Amount is" + scoreAmount);
		//update Counter in the HTML -Melanie
		scoreDiv.innerHTML = `Score: ${scoreAmount}/10`;
	} else {
		alert(`Incorrect. The correct answer is ${correctAnswer}.`);
	}
	questionNumber++;
	console.log("Question Number is" + questionNumber);
	//update Counter in the HTML -Melanie
	questionDiv.innerHTML = `Question Number # ${questionNumber}`;
	//clear the text box - Melanie
	document.getElementById("textInput").value = "";

	if (questionNumber > 10) {
		window.location.href = winPage;
	}
}

const returntoHome = "/portfolio-quiz-index.html"

// Function to perform arithmetic operations
function calculate(operation, num1, num2) {
	switch (operation) {
		case "add":
			return num1 + num2;
			break;
		case "subtract":
			return num1 - num2;
			break;
		case "multiply":
			return num1 * num2;
			break;
		case "divide":
			if (num2 !== 0) {
				return num1 / num2;
			} else {
				return "Cannot divide by zero";
			}
			break;
		case null:
			if(operation == "null" || operation == null || operation == "" ) {
        console.log(operation);
        window.location.href = returntoHome;
			}
		default:
			return "Invalid operation";
	}
}

