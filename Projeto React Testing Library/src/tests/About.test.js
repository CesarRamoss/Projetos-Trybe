import { screen } from '@testing-library/react';
import React from 'react';
import { About } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Testes do requisito 2', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const about = screen.getByText(/This application simulates a Pokédex/i);
    expect(about).toBeDefined();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const about = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });
    expect(about).toBeDefined();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const about = screen.getAllByText(/Pokémons/i);
    expect(about).toHaveLength(2);
  });

  it('Teste se a página contém a imagem de uma Pokédex', () => {
    const img = screen.getByAltText('Pokédex');
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
