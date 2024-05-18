const cells = document.querySelectorAll(".cell");
let currentPlayer = 'X';
let board = Array(9).fill(null);
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

alert("Game Starts! X tern.")

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = parseInt(cell.getAttribute('data-index'));

    if (board[cellIndex] || !isGameActive) {
        return;
    }

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        isGameActive = false;
        alert(`✨ ${currentPlayer} wins!`);
        resetGame()
    } else if (board.every(cell => cell !== null)) {
        isGameActive = false;
        alert('✌️ It\'s a draw!');
        resetGame()
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    isGameActive = true;
}