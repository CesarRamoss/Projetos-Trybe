import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 6', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent(/pikachu/i);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);

    const img = screen.getByAltText('Pikachu sprite');
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /More details/i });
    expect(link).toBeDefined();
    expect(link.href).toContain('/pokemons/25');
  });

  it('Teste se ao clicar no link, é feito o redirecionamento da aplicação', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const details = screen.getByRole('heading', { name: /Pikachu Details/i, level: 2 });
    expect(details).toBeDefined();
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More Details/i });
    userEvent.click(moreDetails);

    const labelFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(labelFavorite);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star.src).toContain('/star-icon.svg');
    expect(star).toBeDefined();
  });
});
