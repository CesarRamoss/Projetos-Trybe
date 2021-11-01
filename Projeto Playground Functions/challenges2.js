// Desafio 10
function techList(tec, name) {
  let arrayTec = [];
  let tecnologias = {};

  if(tec.length == 0){

    return("Vazio!");

  } else {

    let arrayOrd = tec.sort();    

    for(let i=0; i<arrayOrd.length;i++){
      tecnologias = new Object();
      tecnologias.tech = arrayOrd[i];
      tecnologias.name = name;  
      arrayTec.push(tecnologias);
      
    }  

  }
  return arrayTec;  

}

// Desafio 11
function generatePhoneNumber(array) {
  let aux = [];
  let contador=0;

  if(array.length!=11){
    return('Array com tamanho incorreto.');
  } else {
    let repetidos = [];
    for(let i=0;i<array.length;i++){
            if (array.indexOf(array[i]) != i){ //indexOf verifica a razao valor x indice e retorna false caso haja repeticao
              repetidos.push(array[i]);
            }
          }

    for(let i of repetidos){
      contador = 0;
      for(let j of repetidos){
        if(i == j){
          contador+=1;
          aux.push(contador);
        }
      }
    }
      for(let i of array){
      if(i<0 || i>9 || aux.some(e => e>=2)){ //método some verifica se há algum numero que se satisfaca a condicao
        return('não é possível gerar um número de telefone com esses valores');
      } else if (i == array[array.length -1]){
        return ('(' + array.slice(0,2).join('') + ') ' + array.slice(2,7).join('') + '-' + array.slice(7,11).join('')); 
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  if(lineA < (lineB + lineC) && Math.abs(lineC - lineB)<lineA){
    return true;
  } else if (lineB < (lineA + lineC) && Math.abs(lineC - lineA)<lineB){
    return true;
  } else if (lineC < (lineB + lineA) && Math.abs(lineB - lineA)<lineC){
    return true;
  } else {
    return false; 
}
}

// Desafio 13
function hydrate(str) {
  let n = str.replace(/[^0-9]/g,''); //regex para eliminar os caracteres não numericos 
  let soma = 0;

  for(let i of n){
    soma += parseInt(i); //converte em numero cada i
  }
  if(soma<=1){
    return (soma + ' copo de água');
  } else {
    return (soma + ' copos de água');
  }
    
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
