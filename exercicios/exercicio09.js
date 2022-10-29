/* eslint-disable no-console */
const objeto = {
  funcionarios: [
    {
      id: 1,
      nome: 'João',
      sobrenome: 'Silva',
    },
    {
      id: 2,
      nome: 'Maria',
      sobrenome: 'Souza',
    },
    {
      id: 3,
      nome: 'Antonio',
      sobrenome: 'Gomez',
    },
    {
      id: 4,
      nome: 'Mariana',
      sobrenome: 'Almeida',
    },
  ],
};

const { funcionarios } = objeto;

const encontrarPessoa = (nomes) => funcionarios
  .filter(({ nome, sobrenome }) => nome === nomes || sobrenome === nomes).map(({ nome, sobrenome }) => `Nome: ${nome} ${sobrenome}`);

console.log(encontrarPessoa('Souza'));

module.exports = encontrarPessoa;
