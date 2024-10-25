function checkAnswer() {
    // Set the correct answer
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if the user selected the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
