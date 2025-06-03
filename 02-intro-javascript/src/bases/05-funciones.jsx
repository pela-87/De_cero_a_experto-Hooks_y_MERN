
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

//console.log(getUser());
const user = getUser();
console.log(user);

function getUserActivo ( nombre ) {
    return {
        uid: 'ABC456',
        username: nombre
    }
};

const usuarioActivo = getUserActivo ( 'Jonatan' );
console.log(usuarioActivo);

//Tarea
//1. Transformen a una función flecha.
//2. Tiene que retornar un objeto implicito.
//3. Pruebas.

const usuarioPrueba = ( nombre ) => ({
    uid: 'ABC789',
    username: nombre
}
);

const valorRetornado = usuarioPrueba('Pela_87');
console.log(valorRetornado);