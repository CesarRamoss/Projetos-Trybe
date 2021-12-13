const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const resultado = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(resultado)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.entries(resultado).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof resultado[0]).toBe('object');
    expect(typeof resultado[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.

    // Teste se os dois productIds terminam com 123.
    const obj1 = resultado[0].details.productId.split(' ')[1].split('').slice(-3);
    const obj2 = resultado[1].details.productId.split(' ')[0].split('').slice(-3);
    expect(obj1).toEqual(['1', '2', '3']);
    expect(obj2).toEqual(['1', '2', '3']);
  });
});
