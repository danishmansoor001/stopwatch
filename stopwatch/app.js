let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = "";

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function startTimer() {
	intervalId = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			seconds = 0;
			minutes++;
			if (minutes === 60) {
				minutes = 0;
				hours++;
			}
		}
		updateTimer();
	}, 1000);
}

function stopTimer() {
	clearInterval(intervalId);
  updateTimer();
}

function resetTimer() {
	hours = 0;
	minutes = 0;
	seconds = 0;
	updateTimer();
}

function updateTimer() {
	document.getElementById('hours').textContent = pad(hours);
	document.getElementById('minutes').textContent = pad(minutes);
	document.getElementById('seconds').textContent = pad(seconds);
}

function pad(number) {
	return (number < 10 ? '0' : '') + number;
}

