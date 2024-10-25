// Select elements
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const resultDisplay = document.getElementById("calculation-result");

// Function to perform the calculation
function calculate(operation) {
    // Parse input values as numbers
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers";
        return;
    }

    // Initialize result variable
    let result;

    // Perform the calculation based on the operation
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultDisplay.textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Unknown operation";
    }

    // Display the result
    resultDisplay.textContent = result;
}

// Add event listeners for each operation button
document.getElementById("add").addEventListener("click", () => calculate("add"));
document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));
document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));
document.getElementById("divide").addEventListener("click", () => calculate("divide"));
