/* eslint-disable no-console */
const objeto = {
  doguinhos: [
    {
      nome: 'Rex',
      idade: 2,
      raca: 'Pug',
    },
    {
      nome: 'Bolinha',
      idade: 3,
      raca: 'Poodle',
    },
    {
      nome: 'Pé de Pano',
      idade: 10,
      raca: 'Vira-lata',
    },
    {
      nome: 'Scooby',
      idade: 7,
      raca: 'Dogue-alemão',
    },
  ],
};

const { doguinhos } = objeto;

// Nome: cachorrinho Idade: X

const nomesDoguinhos = () => doguinhos.sort((a, b) => b.idade - a.idade)
  .map(({ nome, idade }) => `Nome: ${nome}, Idade: ${idade}`);

console.log(nomesDoguinhos());

module.exports = { nomesDoguinhos };
