const { foreachFunc, reduce } = require('../exercicios/exercicio05');

describe('Exercício 05', () => {
  it('Retorna a soma de todos os números do array usando forEach', () => {
    expect(foreachFunc()).toEqual(55);
  });

  it('Retorna a soma de todos os números do array usando reduce', () => {
    expect(reduce()).toEqual(55);
  });
});