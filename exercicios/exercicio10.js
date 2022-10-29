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
      sobrenome: 'Ferreira',
    },
    {
      id: 4,
      nome: 'Mariana',
      sobrenome: 'Almeida',
    },
  ],
};

const { funcionarios } = objeto;

const encontrarPessoa = (...parametros) => {
  const pessoas = funcionarios
    .filter(({ id, nome, sobrenome }) => parametros.includes(id) || parametros
      .includes(nome) || parametros.includes(sobrenome));
  return pessoas.map(({ nome, sobrenome }) => `Nome: ${nome} ${sobrenome}`);
};

module.exports = encontrarPessoa;
