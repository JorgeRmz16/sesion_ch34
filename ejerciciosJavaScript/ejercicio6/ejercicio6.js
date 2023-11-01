//Algoritmo de burbuja.
const nums1 = [3, 6, 12, 5, 100, 1 ];
const numsSorted = nums1.sort(function(a,b){
  return a - b;
})
console.log(`Array principal: ${nums1}`)
console.log(`Array ordenado: ${numsSorted}`)