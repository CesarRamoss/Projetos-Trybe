import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testes requisito 1', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', {
      name: /Home/i,
    });
    expect(linkHome).toBeDefined();
  });

  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', {
      name: /About/i,
    });
    expect(linkAbout).toBeDefined();
  });

  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(linkFavorite).toBeDefined();
  });

  it('A aplicação é redirecionada para a página inicial ao clicar no Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeDefined();

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('A aplicação é redirecionada para a página About ao clicar no about', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeDefined();

    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('Aplicação é redirecionada para a Pokemons Favoritos ao clicar no favorite', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favorites).toBeDefined();

    userEvent.click(favorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Aplicação é redirecionada para Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/desconhecido');

    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeDefined();
  });
});
