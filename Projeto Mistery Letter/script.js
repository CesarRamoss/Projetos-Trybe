/* eslint-disable no-restricted-syntax */
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

let eRandom = '';

// funcao aplicar classes randomicas
function randomClass() {
  const e1 = Math.floor(Math.random() * grupoEstilo.length);
  const e2 = Math.floor(Math.random() * grupoTamanho.length);
  const e3 = Math.floor(Math.random() * grupoRotacao.length);
  const e4 = Math.floor(Math.random() * grupoInclinacao.length);

  eRandom = `${grupoEstilo[e1]} ${grupoTamanho[e2]} ${grupoRotacao[e3]} ${grupoInclinacao[e4]}`;
}

// funcao gerar carta
// eslint-disable-next-line max-lines-per-function
function criaSpan() {
  const inputText = document.querySelector('#carta-texto').value;
  const split = inputText.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  const pN = document.querySelector('#carta-contador');

  let qWords = 0;

  if (inputText === '' || inputText.trim() === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragraph.innerHTML = '';
    for (const i of split) {
      const span = document.createElement('span');
      span.innerText = i;
      const container = document.querySelector('#carta-gerada');
      container.appendChild(span);
      randomClass();
      span.classList = eRandom;
      qWords += 1;
    }
  }
  pN.innerText = qWords;
}

document.querySelector('#criar-carta').addEventListener('click', criaSpan);
