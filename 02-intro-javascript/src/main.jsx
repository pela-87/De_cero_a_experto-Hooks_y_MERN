
//Funciones en JS
const saludar = function ( nombre ) {
    return `Hola, ${nombre}`;
}

//Función flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo..!!!`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));
console.log(saludar4());

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Pela87'
//     }
// };

// console.log(getUser());

//Es otra forma de devolver un objeto sin el RETURN.
const getUser = () => (
    {
        uid: 'ABC123',
        username: 'Pela87'
    }
);

console.log(getUser());

