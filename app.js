let board = document.querySelector('.board');
let width = board.offsetWidth;
let height = board.offsetHeight;

let currentNumSquares = document.querySelector('.currentNumSquares');
let numSlider = document.querySelector('#numSquares');
let squares = document.querySelectorAll('.square');

let tools = Array.from(document.querySelectorAll('.tool'));
let penColourLabel = document.querySelector('.drawingColourLabel')
let penColour = document.querySelector('#drawingColour');
let rainbow = document.querySelector('#rainbow');
let canvasColour = document.querySelector('#backgroundColour');
let eraser = document.querySelector('#eraser');
let reset = document.querySelector('#reset');

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
            if(e.buttons == 1) {
                e.preventDefault();
                if(penColourLabel.classList.contains('active')) {
                    elem.style.backgroundColor = drawingColour.value;
                } else if(rainbow.classList.contains('active')) {
                    elem.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                }
            }
        });
    });
}

window.addEventListener('load', createBoard);

canvasColour.addEventListener("input", () => {
    let backgroundColour = document.querySelector('#backgroundColour').value;
    board.style.backgroundColor = backgroundColour;
})

eraser.addEventListener("click", () => {
    squares = document.querySelectorAll('.square');
    squares.forEach(function(elem) {
        elem.addEventListener("mousemove", function(e) {
            if(e.buttons == 1 && eraser.classList.contains('active') ) {
            e.preventDefault();
            elem.style.backgroundColor = 'transparent';
            }
        });
    });
});

penColour.addEventListener("change", () => {
    tools.forEach(node => {
        node.classList.remove('active');
      });
      penColourLabel.classList.add('active');
})

reset.addEventListener("click", clearBoard);

numSlider.addEventListener("change", clearBoard);

numSlider.addEventListener('input', () => {
    currentNumSquares.textContent = `${numSlider.value} x ${numSlider.value}`;
})

const activeBtn = (e) => {
  tools.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

tools.forEach(node => {
  node.addEventListener('click', activeBtn)
});
