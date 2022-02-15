import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 7', () => {
  const pikachuLocation = 'Pikachu location';
  it('Teste se as informações detalhadas do Pokémon são mostradas na tela.', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const details = screen.getByRole('heading', { name: /Pikachu Details/i, level: 2 });
    expect(details).toBeDefined();
    const linkNav = screen.queryByRole('link', { name: /More details/i });
    expect(linkNav).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(summary).toBeDefined();

    const resume = screen.getByText(/This intelligent Pokémon roasts hard berries/i);
    expect(resume).toBeInTheDocument();
  });

  it('Teste se existe na página os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const location = screen.getByRole('heading', {
      name: /Game Locations of Pikachu/i, level: 2 });
    expect(location).toBeDefined();

    const imgsLocation = screen.getAllByAltText(pikachuLocation);
    expect(imgsLocation).toHaveLength(2);

    expect(imgsLocation[0].alt).toContain(pikachuLocation);
    expect(imgsLocation[1].alt).toContain(pikachuLocation);
    expect(imgsLocation[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgsLocation[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Teste se o usuário pode favoritar através da página de detalhes.', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const labelFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(labelFavorite);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toBeDefined();
    userEvent.click(labelFavorite);
    expect(star).not.toBeInTheDocument();
  });
});
