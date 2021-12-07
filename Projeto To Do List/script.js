function criarTarefa() {
  const text = document.getElementById('texto-tarefa').value; // captura o valor digitado no campo

  const myLi = document.createElement('li'); // cria o elemento LI e adiciona no lista tarefas
  myLi.innerText = text;
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const container = document.querySelector('#lista-tarefas');
  container.appendChild(myLi);

  document.getElementById('texto-tarefa').value = ''; // limpa o campo input
}

const clickBtn = document.querySelector('#criar-tarefa');
clickBtn.addEventListener('click', criarTarefa);

// Muda background
function mudaCor(e) {
  const eleSelected = document.querySelectorAll('li');
  for (i of eleSelected) {
    i.classList.remove('fundocinza'); // limpa caso tenha alguma classe fundocinza
  }
  e.target.classList.add('fundocinza'); // seta a classe fundocinza para o elemento clicado
}

const clickItem = document.querySelector('#lista-tarefas');
clickItem.addEventListener('click', mudaCor);

// Duplo clique
function duploClick(e) {
  const elemento = e.target;
  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
  }
}

const clickDuplo = document.querySelector('#lista-tarefas');
clickDuplo.addEventListener('dblclick', duploClick);

// Zera tudo
function reset() {
  const container = document.querySelector('#lista-tarefas');
  container.innerText = '';
}

const clickZera = document.querySelector('#apaga-tudo');
clickZera.addEventListener('click', reset);

// Remover concluídos
function removeConcluidos() {
  const itens = document.querySelectorAll('#lista-tarefas li');
  for (const i of itens) {
    if (i.classList.contains('completed')) {
      i.remove();
    }
  }
}

const clickRemove = document.querySelector('#remover-finalizados');
clickRemove.addEventListener('click', removeConcluidos);

// Mover para cima / baixo
function moveBaixo() {
  const itens = document.querySelectorAll('#lista-tarefas li');
  const eleSelected = document.querySelector('.fundocinza');

  for (const i of itens) {
    if (i.classList.contains('fundocinza')) {
      if (eleSelected.nextElementSibling === null) {
        return false;
      }
      eleSelected.parentNode.insertBefore(
        eleSelected.nextElementSibling,
        eleSelected
      );
    }
  }
}

const clickCima = document.querySelector('#mover-cima');
clickCima.addEventListener('click', moveCima);

function moveCima() {
  const itens = document.querySelectorAll('#lista-tarefas li');
  const eleSelected = document.querySelector('.fundocinza');

  for (const i of itens) {
    if (i.classList.contains('fundocinza')) {
      if (eleSelected.previousElementSibling === null) {
        return false;
      }
      eleSelected.parentNode.insertBefore(
        eleSelected,
        eleSelected.previousElementSibling
      );
    }
  }
}

const clickBaixo = document.querySelector('#mover-baixo');
clickBaixo.addEventListener('click', moveBaixo);

// Remover selecionado
function removeItem() {
  const itens = document.querySelectorAll('#lista-tarefas li');
  for (const i of itens) {
    if (i.classList.contains('fundocinza')) {
      i.remove();
    }
  }
}
const clickremove = document.querySelector('#remover-selecionado');
clickremove.addEventListener('click', removeItem);

// Salvar Tarefas
const localItens = JSON.parse(localStorage.getItem('tasks'));
if (localItens) {
  for (let i = 0; i < localItens.length; i += 1) {
    const myLi = document.createElement('li');
    myLi.innerText = localItens[i].conteudo;
    myLi.className = localItens[i].classe;
    clickItem.appendChild(myLi);
  }
}

function salvaTarefa() {
  const itensLi = document.querySelectorAll('#lista-tarefas li');
  const array = [];

  for (const i of itensLi) {
    const obj = { conteudo: '', classe: '' };
    obj.conteudo = i.innerText;
    obj.classe = i.className;
    array.push(obj);
  }
  localStorage.setItem('tasks', JSON.stringify(array));
}

const clickSalva = document.querySelector('#salvar-tarefas');
clickSalva.addEventListener('click', salvaTarefa);
