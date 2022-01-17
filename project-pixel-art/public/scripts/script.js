/* eslint-disable editorconfig/editorconfig */
const colorPallete = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.querySelector('#board-size');
let currentColor = 'rgb(0, 0, 0)';
let i = 0;

colorPallete.addEventListener('click', (e) => {
    if (e.target.classList[1] !== 'selected') {
        document.querySelector('.selected').className = 'color';
        e.target.className += ' selected'; 
    }
    currentColor = getComputedStyle((e.target)).backgroundColor;
});

pixelBoard.addEventListener('click', (e) => {
    e.target.style.backgroundColor = currentColor;
});

function randomRGB() {
    return Number((parseFloat(Math.random() * (0.255 - 0.001) + 0.001).toFixed(3))) * 1000;
}

while (i <= 5) {
    const divColor = colorPallete.appendChild(document.createElement('div'));
    divColor.className = 'color';

    divColor.style.backgroundColor = `rgb(${
        randomRGB()}, ${
        randomRGB()}, ${
        randomRGB()})`;
        
    if (i === 0) {
        divColor.className += ' selected';
        divColor.style.backgroundColor = 'black';
    }

    i += 1;
}

i = 0;

while (i < 25) {
    const canvasPixel = pixelBoard.appendChild(document.createElement('canvas'));
    canvasPixel.className = 'pixel';
    canvasPixel.width = '40';
    canvasPixel.height = '40';

    i += 1;
}

const pixel = document.querySelectorAll('.pixel');

document.querySelector('#clear-board').addEventListener('click', () => {
    pixel.forEach((e) => {
         e.style.backgroundColor = 'rgb(255, 255, 255)';
    });
 });

document.querySelector('#generate-board').addEventListener('click', () => {
    if (!boardSize.value) {
        return alert('Insira um valor válido');
    }

    if (boardSize.value < 5) {
        boardSize.value = 5;
    }

    if (boardSize.value > 50) {
        boardSize.value = 50;
    }

    pixel.forEach((e) => {
         e.width = boardSize.value;
         e.height = boardSize.value;
         pixelBoard.style.width = `${e.width * 5}px`;
         e.style.backgroundColor = 'rgb(255, 255, 255)';
    });
});