const {todasPessoasSaoMaioresQue20, algumaPessoaTemMaisDe40} = require('../exercicios/exercicio03');

describe('Exercício 03', () => {
  it('Retorna true se todas as pessoas tiverem mais de 20 anos', () => {
    expect(todasPessoasSaoMaioresQue20()).toBe(false);
  });

  it('Retorna false se todas as pessoas não tiverem mais de 20 anos', () => {
    expect(algumaPessoaTemMaisDe40()).toBe(true);
  });
});