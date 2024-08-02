// script.js

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (board[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        board[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        checkResult();
    }

    function checkResult() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            gameActive = false;
            alert(`${currentPlayer} wins!`);
            return;
        }

        if (!board.includes('')) {
            gameActive = false;
            alert('It\'s a draw!');
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    }

    gameBoard.addEventListener('click', handleCellClick);
    resetButton.addEventListener('click', resetGame);
});
