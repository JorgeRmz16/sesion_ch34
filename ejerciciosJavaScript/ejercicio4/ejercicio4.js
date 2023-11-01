//sugerencia filter() e includes()

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(function(course) { // funcion de devolucion de llamada
  return student2Courses.includes(course); // verifica si el valor se encuentra en el array y devuelve true o false
});
if (commonCourses.length > 0) {
  console.log('Cursos en comun:');
  commonCourses.forEach(function(course) {
    console.log(course);
  });
} else {
  console.log('No hay cursos en comun.');
}