const container = document.querySelector('.container');
const newGridBtn = document.getElementById('new-grid');
const containerSize = 960;
 
 function createGrid(size) {
      container.innerHTML = '';
      const squareSize = containerSize / size;

      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
          square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
      }
    }
   
    createGrid(16);

    newGridBtn.addEventListener('click', () => {
      let gridSize = parseInt(prompt('Enter number of squares per side (1-100):'));
      if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
      }
      createGrid(gridSize);
    });

const randomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;
square.addEventListener('mouseover', () => {
  square.style.backgroundColor = randomColor();
});