const { pessoaMaisVelha, pessoaMaisNova } = require('../exercicios/exercicio04');

describe('Exercício 04', () => {
  it('Retorna a pessoa mais velha', () => {
    expect(pessoaMaisVelha()).toEqual({
      nome: 'João',
      sobrenome: 'Silva',
      sexo: 'M',
      idade: 48,
    });
  });

  it('Retorna a pessoa mais nova', () => {
    expect(pessoaMaisNova()).toEqual({
      nome: 'Joana',
      sobrenome: 'Pereira',
      sexo: 'F',
      idade: 18,
    });
  });
});