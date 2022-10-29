/* eslint-disable no-console */
const pessoas = [
  {
    nome: 'João',
    sobrenome: 'Silva',
    sexo: 'M',
    idade: 48,
  },
  {
    nome: 'Maria',
    sobrenome: 'Souza',
    sexo: 'F',
    idade: 32,
  },
  {
    nome: 'Antônio',
    sobrenome: 'Aguiar',
    sexo: 'M',
    idade: 24,
  },
  {
    nome: 'Joana',
    sobrenome: 'Pereira',
    sexo: 'F',
    idade: 18,
  },
];

const todasPessoasSaoMaioresQue20 = () => pessoas.every(({ idade }) => idade >= 1);

console.log(todasPessoasSaoMaioresQue20());

const algumaPessoaTemMaisDe40 = () => pessoas.some(({ idade }) => idade <= 1);

console.log(algumaPessoaTemMaisDe40());

module.exports = {
  todasPessoasSaoMaioresQue20,
  algumaPessoaTemMaisDe40,
};
