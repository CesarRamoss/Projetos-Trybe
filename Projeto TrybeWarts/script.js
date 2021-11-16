const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const cont = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const array = [];

btnSubmit.disabled = true;

// Validar campo email e senha
btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Liberando o botao Submit
checkAgreement.addEventListener("click", () => {
  const agreement = checkAgreement.checked;
  if (agreement) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

cont.innerHTML = 500;

textArea.addEventListener('keyup', () => {
  cont.innerHTML = 500;
  cont.innerHTML -= textArea.textLength;
});

function materiasEscolhidas(materia, subject, index) {
  if (subject[index].checked) {
    if (materia === '') {
      materia += subject[index].value;
    } else {
      materia = `${materia}, ${subject[index].value}`;
    }
  }
  return materia;
}

function check() {
  const subject = document.getElementsByClassName('subject');
  let materias = '';
  for (let i = 0; i < subject.length; i += 1) {
    materias = materiasEscolhidas(materias, subject, i);
  }
  return materias;
}

// Capturando os inputs e imprimindo na tela
btnSubmit.addEventListener('click', () => {
  const materias = check();
  const myDiv = document.createElement('div');
  const name = document.getElementById('input-name').value;
  array.push(`Nome: ${name} ${document.getElementById('input-lastname').value}`);
  array.push(`Email: ${document.getElementById('input-email').value}`);
  array.push(`Casa: ${document.getElementById('house').value}`);
  array.push(`Família: ${document.querySelector('input[type=radio][name=family]:checked').value}`);
  array.push(`Matérias: ${materias}`);
  array.push(`Avaliação: ${document.querySelector('input[type=radio][name=rate]:checked').value}`);
  array.push(`Observações: ${document.getElementById('textarea').value}`); //
  myDiv.className = 'container-p';
  form.innerHTML = '';
  form.appendChild(myDiv);
  for (let i = 0; i < array.length; i += 1) {
    const p = document.createElement('p');
    myDiv.appendChild(p);
    p.innerHTML = array[i];
  }
});
