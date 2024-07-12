document.addEventListener("DOMContentLoaded", function() {
    let streakCounter = 0;
    const streakElement = document.getElementById("streak-counter");
    const progressBar = document.getElementById("progress-bar");

    function updateStreak() {
        streakCounter++;
        streakElement.textContent = streakCounter;
        updateProgressBar();
    }

    function updateProgressBar() {
        const percentage = (streakCounter % 7) / 7 * 100;
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${Math.round(percentage)}%`;
    }

    function logWaterIntake() {
        // For simplicity, we're assuming one log per day.
        // In a real application, you would need more logic to handle multiple logs per day, reset at midnight, etc.
        updateStreak();
    }

    // Attach the logWaterIntake function to the button click event
    document.querySelector(".button").addEventListener("click", logWaterIntake);

    // Initial progress bar setup
    updateProgressBar();
});
