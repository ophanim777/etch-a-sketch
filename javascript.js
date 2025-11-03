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
    container.appendChild(square);
  }
}

createGrid(gridSize);

const randomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;
square.addEventListener('mouseover', () => {
  square.style.backgroundColor = randomColor();
});