// Cores randomicas
let numerosRgb;
let corCerta;
let score = 0;

function geraCor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  numerosRgb = `(${r}, ${g}, ${b})`;
}
geraCor();
document.querySelector('#rgb-color').innerHTML = numerosRgb;

for (let i = 0; i < 6; i += 1) {
  const circle = document.createElement('div');
  circle.className = 'ball';
  const container = document.querySelector('.circles');
  container.appendChild(circle);
  if (i === 0) {
    circle.style.backgroundColor = `rgb${numerosRgb}`;
    corCerta = circle.style.backgroundColor;
  } else {
    geraCor();
    circle.style.backgroundColor = `rgb${numerosRgb}`;
  }
}

// validação das cores
function verificarCor(e) {
  if (corCerta === e.target.style.backgroundColor) {
    document.querySelector('#answer').innerHTML = 'Acertou!';
    score += 3;
    atualizaScore();
  } else {
    document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
    if (score > 0) {
      score -= 1;
      atualizaScore();
    }
  }
}

const clickItem = document.querySelector('.circles');
clickItem.addEventListener('click', verificarCor);

// botão reset
function reset() {
  document.location.reload();
}
const clickReset = document.querySelector('#reset-game');
clickReset.addEventListener('click', reset);

// Score
document.querySelector('.resultado').innerHTML = score;
// eslint-disable-next-line radix
const verificaCookie = parseInt(localStorage.getItem('score'));
if (verificaCookie > 0) {
  document.querySelector('.resultado').innerHTML = verificaCookie;
  score = verificaCookie;
}

function atualizaScore() {
  if (score >= 0) {
    document.querySelector('.resultado').innerHTML = score;
    localStorage.setItem('score', score);
  }
}
