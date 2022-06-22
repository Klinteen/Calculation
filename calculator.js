const operator = window.prompt("Enter operator ( either +, -, * or / )");

const number1 = parseFloat(window.prompt("Enter first number: "));
const number2 = parseFloat(window.prompt("Enter second number: "));

let result;

if (operator == "+") {
	result = number1 + number2;
}

else if (operator == "-") {
	result = number1 - number2;
}

else if (operator == "*") {
	result = number1 * number2;
}

else if (operator == "/") {
	result = number1 / number2;
}

alert(`${number1} ${operator} ${number2} = ${result}`);
document.write(`${number1} ${operator} ${number2} = ${result}`);