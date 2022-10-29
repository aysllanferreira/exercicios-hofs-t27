const mulheres = require('../exercicios/exercicio02');

describe('Exercício 02', () => {
  it('Retorna um array com apenas os nomes das mulheres', () => {
    expect(mulheres()).toEqual([
      { nome: 'Maria', sobrenome: 'Souza', sexo: 'F', idade: 32 },
      { nome: 'Joana', sobrenome: 'Pereira', sexo: 'F', idade: 18 }
    ]);
  });
});