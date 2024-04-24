const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timerDisplay = document.getElementById('time');

let timer;

// Function to start the timer
startButton.addEventListener('click', () => {
    let minutes = 25;
    let seconds = 0;

    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                alert('Completed Focused Time 👀');
                if (Notification.permission === 'granted') {
                    new Notification('Completed Focused Time 👀');
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            new Notification('Completed Focused Time 👀');
                        }
                    });
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
});

// Function to reset the timer
restartButton.addEventListener('click', () => {
    clearInterval(timer);
    timerDisplay.textContent = '25:00';
});
