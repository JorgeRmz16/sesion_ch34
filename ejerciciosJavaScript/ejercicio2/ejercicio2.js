//sugerencia map()

const nums = [1, 2, 3, 4, 5];
const newArray = nums.map(function (num, indice) { //transforma cada elemento en un nuevo valor almacenandolo en nuevo array con los resultados
  return num * 2;
});
console.log(newArray);