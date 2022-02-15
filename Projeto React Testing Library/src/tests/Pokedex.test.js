import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testes do requisito 5', () => {
  const pokemonName = 'pokemon-name';
  const NUMBERFILTERS = 7;

  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    const pokedexTitle = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2 });
    expect(pokedexTitle).toBeDefined();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando clicado.', () => {
    const firstPokemon = screen.getByTestId(pokemonName);
    expect(firstPokemon).toHaveTextContent(/pikachu/i);

    const buttonNext = screen.getByTestId('next-pokemon');
    expect(buttonNext).toHaveTextContent('Próximo pokémon');
    userEvent.click(buttonNext);

    const nextPokemon = screen.getByTestId(pokemonName);
    expect(nextPokemon).toHaveTextContent(/charmander/i);

    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    expect(firstPokemon).toHaveTextContent(/pikachu/i);
  });

  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro.', () => {
    const allFilters = screen.queryAllByTestId('pokemon-type-button');
    expect(allFilters).toHaveLength(NUMBERFILTERS);

    const buttonPsychic = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(buttonPsychic);
    const alakazam = screen.getByTestId(pokemonName);
    expect(alakazam).toHaveTextContent(/alakazam/i);

    const buttonNext = screen.getByTestId('next-pokemon');
    userEvent.click(buttonNext);
    const mew = screen.getByTestId(pokemonName);
    expect(mew).toHaveTextContent(/mew/i);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeVisible();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);

    const firstPokemon = screen.getByTestId(pokemonName);
    expect(firstPokemon).toHaveTextContent(/pikachu/i);
  });
});
