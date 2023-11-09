//Algoritmo de burbuja.
const nums1 = [3, 6, 12, 5, 100, 1 ];
function numSorted(lista){
  for(let i = 0; i < lista.length -1; i++){
    for(let j = 0; j < lista.length -i -1; j++){
      if (lista[j] > lista[j + 1]){
        var change = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = change;
      }
    }
  }
  return lista
}
numSorted(nums1)
