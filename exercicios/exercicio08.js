/* eslint-disable no-console */
const array = [3, 5, 1, 6, 2, 4, 7, 9, 8, 10];

// 3 * 2 = 6

const arrayMultiplicado = () => {
  // Seu codigo aqui...
  const mult = array.map((numeros) => `${numeros} * 2 = ${numeros * 2}`);
  return mult;
};

console.log(arrayMultiplicado());

module.exports = arrayMultiplicado;
