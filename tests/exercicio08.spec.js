const arrayMultiplicado = require('../exercicios/exercicio08');

describe('Exercicio 08', () => {
  it('Testa a função arrayMultiplicado', () => {
    expect(arrayMultiplicado()).toEqual([
      '3 * 2 = 6',
      '5 * 2 = 10',
      '1 * 2 = 2',
      '6 * 2 = 12',
      '2 * 2 = 4',
      '4 * 2 = 8',
      '7 * 2 = 14',
      '9 * 2 = 18',
      '8 * 2 = 16',
      '10 * 2 = 20',
    ]);
  });
});