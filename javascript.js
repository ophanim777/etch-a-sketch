const container = document.querySelector('.container');
const gridSize = 16;
function createGrid(size) {
  const squareSize = 600 / size; // fits squares perfectly inside container
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  ;
   square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
}}