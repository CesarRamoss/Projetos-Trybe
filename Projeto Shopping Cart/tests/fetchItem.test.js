require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })
  it('Testa se com o argumento MLB1615760527 a funcao utiliza o endpoint correto', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('Testa se a funcao com o parametro MLB1615760527 é uma estrutura de dados igual ao item', async () => {
    const resultItem = await fetchItem('MLB1615760527');
    expect(resultItem).toEqual(item);
  })
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    const result = await fetchItem();
    expect(result).toEqual(new Error('You must provide an url'));
  })

});
