let board = document.querySelector('.board');
let width = board.offsetWidth;
let height = board.offsetHeight;

let currentNumSquares = document.querySelector('.currentNumSquares');

let numSquares = parseInt(document.querySelector('#numSquares').value);

function updateSquares () {
    currentNumSquares.textContent = document.querySelector('#numSquares').value;
    clearBoard();
    createBoard();
}

function clearBoard() {
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function createBoard () {
    num = document.querySelector('#numSquares').value;

    let boxWidth =  (width / num);
    let boxHeight = (height / num);

    for(let i = 0; i < num*num; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('style', `width: ${boxWidth}px; height: ${boxHeight}px;`);
        board.appendChild(square);
    }
}
createBoard();
