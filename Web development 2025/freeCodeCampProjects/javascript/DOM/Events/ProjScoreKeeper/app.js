const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const P1Display = document.querySelector('#p1Display');
const P2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            P1Display.classList.add('winner')
            P2Display.classList.add('loser')

        }
        P1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            P2Display.classList.add('winner')
            P1Display.classList.add('loser')
        }
        P2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    P1Display.textContent = 0;
    P2Display.textContent = 0;
    P1Display.classList.remove('winner', 'loser');
    P2Display.classList.remove('winner', 'loser');
}