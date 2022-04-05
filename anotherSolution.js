// Message
const message = document.getElementById("message");
let hasWon = false;
// Player 1 details
const player1ScoreBoard = document.getElementById("player1Scoreboard");
const player1Dice = document.getElementById("player1Dice");
let player1Turn = true;
let player1Score = 0;
// Player 2 details
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player2Dice = document.getElementById("player2Dice");
let player2Score = 0;
// buttons
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// Event Listeners

rollBtn.addEventListener("click", function () {
	roll();
	gameEnded();
});

resetBtn.addEventListener("click", function () {
	reset();
	btnVisibility();
});

// Functions

function roll() {
	const rollNumber = Math.floor(Math.random() * 6) + 1;
	if (player1Turn) {
		player1Score += rollNumber;
		player1Dice.textContent = rollNumber;
		player1ScoreBoard.textContent = player1Score;
		message.textContent = `Player 2 Turn`;
		player1Dice.classList.remove("active");
		player2Dice.classList.add("active");
	} else {
		player2Score += rollNumber;
		player2Dice.textContent = rollNumber;
		player2Scoreboard.textContent = player2Score;
		message.textContent = `Player 1 Turn`;
		player2Dice.classList.remove("active");
		player1Dice.classList.add("active");
	}
	player1Turn = !player1Turn;
}

function btnVisibility() {
	if (hasWon) {
		resetBtn.style.display = "block";
		rollBtn.style.display = "none";
	} else {
		resetBtn.style.display = "none";
		rollBtn.style.display = "block";
	}
}

function gameEnded() {
	if (player1Score >= 20) {
		message.textContent = `Player 1 has won`;
		hasWon = true;
		btnVisibility();
	} else if (player2Score >= 20) {
		message.textContent = `Player 2 has won`;
		hasWon = true;
		btnVisibility();
	}
}

function reset() {
	player1Score = 0;
	player1ScoreBoard.textContent = 0;
	player1Dice.textContent = "-";
	player1Turn = true;
	player2Score = 0;
	player2Dice.textContent = "-";
	player2Scoreboard.textContent = 0;
	message.textContent = `Player 1 Turn`;
	hasWon = false;
}
