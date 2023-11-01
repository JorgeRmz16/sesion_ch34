//sugerencia reduce()

const numbers = [1, 2, 3, 4]
const sum = numbers.reduce(function(acumulador, elementoActual) { // reduce un array a un solo valor
  return acumulador + elementoActual;
}, 0);
const mult = numbers.reduce(function(acumulador, elementoActual) {
  return acumulador * elementoActual;
}, 1); // empieza de 1 para no multiplicar por 0
console.log(`El resultado de la suma es: ${sum}`)
console.log(`El resultado de la multiplicacion es: ${mult}`)