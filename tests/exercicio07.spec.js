const primeiroAnimalEncontrado = require('../exercicios/exercicio07');

describe('Exercicio 07', () => {
  it('Testa a função primeiroAnimalEncontrado', () => {
    expect(primeiroAnimalEncontrado()).toBe('Vira-lata');
  });
});