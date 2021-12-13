// Lê input e adiciona ao paragrafo
function lerTexto() {
  const texto = document.getElementById('text-input').value;
  const p = document.querySelector('#meme-text');
  p.innerHTML = texto;
}

// adiciona imagem selecionada
function addImagem() {
  const img = document.querySelector('.meme-image img');
  img.src = URL.createObjectURL(image.files[0]); // fonte : https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
}

// coloca borda
function addBorda(e) {
  const elemento = e.target;
  if (elemento.contains(fire)) {
    document.querySelector('#meme-image-container').classList = 'fire';
    document.querySelector('.meme-image').style.border = '1px solid red';
  } else if (elemento.contains(water)) {
    document.querySelector('#meme-image-container').classList = 'water';
    document.querySelector('.meme-image').style.border = '1px solid blue';
  } else if (elemento.contains(earth)) {
    document.querySelector('#meme-image-container').classList = 'earth';
    document.querySelector('.meme-image').style.border = '1px solid green';
  }
}

// insere meme no quadro
function inserirMeme(e) {
  const elemento = e.target.src;
  document.querySelector('.meme-image img').src = elemento;
}

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', lerTexto);

const image = document.getElementById('meme-insert');
image.addEventListener('change', addImagem);

const clickButton = document.querySelector('.buttons');
clickButton.addEventListener('click', addBorda);

const clickMeme = document.querySelector('.memes');
clickMeme.addEventListener('click', inserirMeme);
