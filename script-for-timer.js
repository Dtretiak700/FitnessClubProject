let interval;
let minutes = 0;
let seconds = 0;
let millisec = 0;

mainButton = document.querySelector('.main-btn');
mainButton.addEventListener('click', showTimer);
function showTimer() {
    document.querySelector('.timer-container').style.display = 'flex';
    document.querySelector('.main-container').style.display = 'none';
}

const startButton = document.querySelector('.btnStart');
const pauseButton = document.querySelector('.btnPause');
const resetButton = document.querySelector('.btnReset');

startButton.addEventListener('click', startTimer);
function startTimer() {
    document.querySelector('h2').textContent = `LET'S GO!`;
    interval = setInterval(timerWork, 10);
}
function timerWork() {
    millisec++;
    if (millisec < 10) {
        millisec = '0' + millisec;
    }
    document.querySelector('.millisec').textContent = millisec;
    if (millisec > 99) {
        millisec = 0;
        seconds++;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.querySelector('.seconds').textContent = seconds;
    }
    if (seconds > 59) {
        millisec = 0;
        seconds = 0;
        minutes++;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        document.querySelector('.seconds').textContent = '00';
        document.querySelector('.minutes').textContent = minutes;
    }
    if (minutes > 59) {  
        document.querySelector('.minutes').textContent = '00';
        document.querySelector('.seconds').textContent = '00';
        clearInterval(interval);
    }
}

pauseButton.addEventListener('click', stopTimer);
function stopTimer() {
    clearInterval(interval);
}

resetButton.addEventListener('click', resetDisplay);
function resetDisplay() {
    document.querySelector('h2').textContent = 'ARE YOU READY?';
    minutes = 0;
    seconds = 0;
    clearInterval(interval);
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}

// ANIMATION
gsap.to('.main-btn', {
    scale: 1.2,
    repeat: -1,
    duration: 1,
    yoyo: true
})