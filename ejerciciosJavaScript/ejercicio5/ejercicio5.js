let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//1.	Write a command that prints out all of the people in the list.
console.log("Ejercicio 1:")
people.forEach(function(name) { 
    console.log(name) 
})
//2.	Write the command to remove "Dani" from the array.
console.log("\nEjercicio 2:")
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Dani") {
    people.splice(i, 1);
    break;
  }
}
console.log(people);
//3.	Write the command to remove "Juan" from the array.
console.log("\nEjercicio 3:")
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Juan") {
    people.splice(i, 1);
    break;
  }
}
console.log(people);
//4.	Write the command to move "Luis" to the front of the array.
console.log("\nEjercicio 4:")
let index = people.indexOf("Luis"); //Buscar  Luis
if (index !== -1) {
  people.splice(index, 1); //Eliminamos a Luis
  people.unshift("Luis"); //Agregamos a Luis
}
console.log(people);
//5.	Write the command to add your name to the end of the array.
console.log("\nEjercicio 5:")
people.push('Jorge');
console.log(people)
//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
console.log("\nEjercicio 6:")
for(let i = 0 ; i < people.length; i++){
  console.log(people[i])
  if (people[i] === 'Maria'){
    break
  }
}
//7.	Write the command that gives the indexOf where "Maria" is located.
console.log("\nEjercicio 7:")
console.log('Indice de Maria: ' + people.indexOf('Maria'))
//At the end of the exercise, there should be 4 people in the array.
console.log("\nResultado final:")
console.log(people)