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

const randomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;
square.addEventListener('mouseover', () => {
  square.style.backgroundColor = randomColor();
});