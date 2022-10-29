const emails = require('../exercicios/exercicio01');

describe('Exercício 01', () => {
  it('Retorna um array transformando os items em emails', () => {
    expect(emails()).toEqual([
      'joão.silva@aulao.com',
      'maria.souza@aulao.com',
      'antônio.aguiar@aulao.com',
      'joana.pereira@aulao.com'
    ]);
  });
});