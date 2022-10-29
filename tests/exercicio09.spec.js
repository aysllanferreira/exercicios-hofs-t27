const encontrarPessoa = require('../exercicios/exercicio09');

describe('Exercicio 09', () => {
  it('Testa a função encontrarPessoa', () => {
    expect(encontrarPessoa('Mariana')).toEqual(['Nome: Mariana Almeida']);
  });
});