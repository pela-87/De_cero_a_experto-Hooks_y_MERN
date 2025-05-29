const persona = {
    nombre: 'Pela',
    apellido: 'Stark',
    edad: 38,
    direccion: {
        ciudad: 'Bahia Blanca',
        CP: 8000,
        lat: 14.25455,
        lng: 854777,
    }
};

console.log(persona);

//console.table(persona);
//es lo mismo.
/*
console.log({persona: persona});
console.log({persona});
*/

//asignacion de refencia, es una copia del espacio en memoria.
/*
const persona2 = persona;
persona2.nombre = 'Santiago';
console.log(persona);
console.log(persona2);
*/

//para hacer un clon del objeto y poder modificar sin alteral el original.
const persona3 = {...persona};
persona3.nombre = 'Axel'
console.log(persona);
console.log(persona3);