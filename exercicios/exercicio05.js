/* eslint-disable no-console */
const array = [3, 5, 1, 6, 2, 4, 7, 9, 8, 10];

const foreachFunc = () => {
  // Seu codigo aqui...
  let acc = 0;
  array.forEach((number) => {
    acc += number;
  });
  return acc;
};

console.log(foreachFunc());

const reduce = () => array.reduce((acc, curr) => acc + curr);

console.log(reduce());

module.exports = { foreachFunc, reduce };
