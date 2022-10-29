/* eslint-disable no-console */
const pessoas = [
  {
    nome: 'Joao',
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

// joao.silva@aulao.com

const emails = () => pessoas.map(({ nome, sobrenome }) => `${nome.toLowerCase()}.${
  sobrenome.toLowerCase()}@aulao.com`);

console.log(emails());

module.exports = emails;
