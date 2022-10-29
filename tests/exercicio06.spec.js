const {nomesDoguinhos, nomesDoguinhos2} = require('../exercicios/exercicio06');

describe('Exercicio 06', () => {
  it('Testa a função nomesDoguinhos', () => {
    expect(nomesDoguinhos()).toEqual([
      'Nome: Pé de Pano, Idade: 10',
      'Nome: Scooby, Idade: 7',
      'Nome: Bolinha, Idade: 3',
      'Nome: Rex, Idade: 2',
    ]);
  });
});