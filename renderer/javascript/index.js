// Get the buttons and the timer display element
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timerDisplay = document.getElementById('time');

let timer; // Variable to store the timer

// Function to start the timer
startButton.addEventListener('click', () => {
    let minutes = 25; // Initial minutes for the timer
    let seconds = 0; // Initial seconds for the timer

    // Update the timer display every second
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer); // Stop the timer when it reaches 00:00
                alert('Time\'s up!'); // Show an alert when the timer ends
            } else {
                minutes--; // Decrease minutes
                seconds = 59; // Reset seconds to 59
            }
        } else {
            seconds--; // Decrease seconds
        }

        // Format minutes and seconds to display as "mm:ss"
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Update the timer display
        timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000); // 1000 milliseconds = 1 second
});

// Function to reset the timer
restartButton.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    timerDisplay.textContent = '25:00'; // Reset the timer display to 25:00
});