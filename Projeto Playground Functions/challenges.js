// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let resultado = (base * height)/2;
  return resultado;
}

// Desafio 3
function splitSentence(palavra) {
  let arr = palavra.split(' ')
  return arr;
}

// Desafio 4
function concatName(palavras) {
  
  let ultimo = (palavras[palavras.length-1]);
  let primeiro = palavras[0];

  return (ultimo + ', ' + primeiro);

}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3
  let empate = ties * 1

  return vitoria + empate
}

// Desafio 6
function highestCount(numeros) {    
  let contador=0; 
  let maior = numeros[0];

  for(let i=0;i<numeros.length;i++){    
    if (maior <= numeros[i]){
      maior = numeros[i];
    }  
  }  
  for(let i of numeros){
    if(maior == i ){
      contador+=1
    }
  }   
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if(distCat1<0){ //transformando em positivo caso seja negativo
    distCat1= distCat1*-1;
  }
  if(distCat2<0){
    distCat2 =distCat2*-1;
  }
  
  if(distCat1 > distCat2) {
    return("cat2");
  } else if (distCat1 == distCat2){
    return('os gatos trombam e o rato foge');
  } else {
    return("cat1");
  }  
  
}



// Desafio 8
function fizzBuzz(arr) {
  let novoArray = [];

  for(let i of arr){

    if(i%3==0 && i%5!=0){      
        novoArray.push("fizz");        
    }
    else if(i%5==0 && i%3!=0){
        novoArray.push("buzz");
    }    
    else if(i%3==0 && i%5==0){
        novoArray.push("fizzBuzz");
      }
    else {
        novoArray.push("bug!");
      }
    }
    return(novoArray);
  }

// Desafio 9
function encode(str) {
  
  let splitted = str.split("");
  for(let i=0;i<=splitted.length;i++){
   
    switch(splitted[i]){
      case 'a':
        splitted[i] = '1';
        break;
      case 'e':
        splitted[i] = '2';
        break;
      case 'i':
        splitted[i] = '3';
        break;
      case 'o':
        splitted[i] = '4';
        break;
      case 'u':
        splitted[i] = '5';
        break;        
    }

  }
  return splitted.join('');
  
}

function decode(str) {
  let splitted = str.split("");
  for(let i=0;i<=splitted.length;i++){
   
    switch(splitted[i]){
      case '1':
        splitted[i] = 'a';
        break;
      case '2':
        splitted[i] = 'e';
        break;
      case '3':
        splitted[i] = 'i';
        break;
      case '4':
        splitted[i] = 'o';
        break;
      case '5':
        splitted[i] = 'u';
        break;        
    }

  }
  return splitted.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
