/* eslint-disable max-lines-per-function */
let corSelected = 'black';

function randomColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

for (let i = 0; i < 4; i += 1) {
  const myDiv = document.createElement('div');
  myDiv.className = 'color';
  const container = document.getElementById('color-palette');
  container.appendChild(myDiv);

  if (i !== 0) {
    myDiv.style.backgroundColor = randomColor(); // cores aleatorias para os elementos, exceto o 1º
  } else if (i === 0) {
    myDiv.style.backgroundColor = 'black';
    myDiv.className = 'color selected';
  }
}
function colorir() {
  const celula = document.querySelector('#color-palette');
  celula.addEventListener('click', (e) => {
    corSelected = e.target.style.backgroundColor; // captura o valor do elemento clicado

    const eleSelected = document.querySelectorAll('.color');
    // eslint-disable-next-line no-restricted-syntax
    for (i of eleSelected) {
      i.classList.remove('selected'); // limpa caso tenha alguma classe selected
    }
    e.target.className = 'color selected'; // seta a classe selected para o elemento clicado
  });

  const pixels = document.querySelectorAll('.pixel'); // variavel para capturar todos os quadrinhos e criar evento de escuta

  // eslint-disable-next-line no-restricted-syntax
  for (i of pixels) {
    // eslint-disable-next-line no-loop-func
    i.addEventListener('click', (e) => {
      e.target.style.backgroundColor = corSelected;
    });
  }

  const clickLimpar = document.querySelector('#clear-board');
  clickLimpar.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (i of pixels) {
      i.style.backgroundColor = '';
    }
  });
}
colorir();

// Gera Grid escolhido
function geraGrid() {
  const pixels = document.querySelector('.pixels');
  pixels.innerHTML = '';
  let n = document.querySelector('#board-size').value;
  if (n === '') {
    alert('Board inválido!');
  } else if (n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }
  for (i = 0; i < n; i += 1) {
    const celula = document.createElement('div');
    celula.id = 'pixel-board';
    const container = document.querySelector('.pixels');
    container.appendChild(celula);
    for (j = 0; j < n; j += 1) {
      const celula2 = document.createElement('div');
      celula2.className = 'pixel';
      const container2 = document.querySelectorAll('#pixel-board')[i];
      container2.appendChild(celula2);
    }
  }
  colorir();
}

const grid = document.querySelector('#generate-board');
grid.addEventListener('click', geraGrid);
