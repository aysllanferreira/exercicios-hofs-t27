const encontrarPessoa = require('../exercicios/exercicio09');

describe('Exercicio 09', () => {
  it('Testa a função encontrarPessoa', () => {
    expect(encontrarPessoa('Mariana')).toBe('Nome: Mariana Almeida');
  });
});