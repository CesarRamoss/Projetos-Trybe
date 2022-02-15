import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Testes do requisito 3', () => {
  it('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const title = screen.getByText('No favorite pokemon found');
    expect(title).toBeDefined();
  });

  it('Teste se é exibido os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More Details/i });
    userEvent.click(moreDetails);

    const labelFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(labelFavorite);

    const { history } = renderWithRouter(<FavoritePokemons />);
    history.push('/favorites');

    const namePokemon = screen.getByTestId('pokemon-name');
    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(namePokemon).toBeDefined();
    expect(weightPokemon).toBeDefined();
  });
});
