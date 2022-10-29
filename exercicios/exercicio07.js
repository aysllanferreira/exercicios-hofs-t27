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

const primeiroAnimalEncontrado = () => doguinhos.filter(({ idade }) => idade > 5)
  .find((elemento) => elemento).raca;

console.log(primeiroAnimalEncontrado());

module.exports = primeiroAnimalEncontrado;
