console.log("Playboard")

const rows = 20;
const cols = 10;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

class Playboard {
    // Snake snake

    // Bit isGameRunning

    isGameRunning = false;
    snake;
    rows;
    columns;
    gameBoardHTML;


    constructor(rows, columns) {
        this.snake = new Snake();
        this.rows = rows;
        this.columns = columns;
        this.gameBoardHTML = document.getElementById('playboard');
    }

    renderGame = async () => {
        await delay(1000);
        console.log(this.isGameRunning ? 'running' : 'render');

        if (this.isGameRunning) {

        }

        this.renderGame();
    }

    startGame = () => {
        this.isGameRunning = true;

        this.gameBoard.innerHTML = '';

        const backgroundTile = new BackgroundTile();

        for (let row = 0; row < this.rows; row++) {
            const row = this.gameBoard.insertRow();
            for (let column = 0; column < this.columns; column++) {
                const cell = row.insertCell();
                cell.classList.add(backgroundTile.getTileCssClass());
            }
        }


    } 
}