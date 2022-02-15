import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testes do requisito 4', () => {
  it('Teste se página contém heading h2 com o texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const pageNotFound = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(pageNotFound).toBeDefined();
  });

  it('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const img = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
