const encontrarPessoa = require('../exercicios/exercicio10');

describe('Exercicio 10', () => {
  it('Testa a função encontrarPessoa', () => {
    expect(encontrarPessoa(1, 'Maria', 'Almeida')).toEqual([ 'Nome: João Silva', 'Nome: Maria Souza', 'Nome: Mariana Almeida' ]);
  });
});