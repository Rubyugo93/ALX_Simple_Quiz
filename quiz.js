// Define the function to check the answer
function checkAnswer() {
    const correctAnswer = "4"; // The correct answer to the question
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get the selected radio button

    // Check if an answer is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option
        const feedback = document.getElementById("feedback");

        // Compare the user's answer to the correct answer and display feedback
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no option is selected, prompt the user to choose an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
        document.getElementById("feedback").style.color = "orange";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
