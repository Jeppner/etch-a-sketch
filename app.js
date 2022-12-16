let board = document.querySelector('.board');
let width = board.offsetWidth;
let height = board.offsetHeight;

let currentNumSquares = document.querySelector('.currentNumSquares');
let numSquares = parseInt(document.querySelector('#numSquares').value);
let squares = document.querySelectorAll('.square');

let tools = Array.from(document.querySelectorAll('.tool'));
let penColour = document.querySelector('#drawingColour');
let eraser = document.querySelector('#eraser');

let reset = document.querySelector('#reset');

function updateSquares () {
    currentNumSquares.textContent = `${document.querySelector('#numSquares').value} x ${document.querySelector('#numSquares').value}`;
    clearBoard();
}

function clearBoard() {
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
    backgroundColour.value = '#FFFFFF';
    board.style.backgroundColor = '#FFFFFF';
    drawingColour.value = '#000000';
    createBoard();
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
    squares = document.querySelectorAll('.square');
    squares.forEach(function(elem) {
        elem.addEventListener("mousemove", function(e) {
            if(e.buttons == 1 ) {
                e.preventDefault();
            elem.style.backgroundColor = drawingColour.value;
            }
        });
    });
}

createBoard();

function chooseColour () {
    drawingColour = document.querySelector('#drawingColour');
}

function chooseBackground () {
    let backgroundColour = document.querySelector('#backgroundColour').value;
    board.style.backgroundColor = backgroundColour;
}


function erase () {
    squares = document.querySelectorAll('.square');
    squares.forEach(function(elem) {
        elem.addEventListener("mousemove", function(e) {
            if(e.buttons == 1 ) {
                e.preventDefault();
            elem.style.backgroundColor = 'transparent';
            }
        });
    });
}


const activeBtn = (e) => {
  tools.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

tools.forEach(node => {
  node.addEventListener('click', activeBtn)
});