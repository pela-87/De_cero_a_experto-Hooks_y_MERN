//Para exportar el contenido del archivo, lo hacemos de la siguiente manera.
//export const "nombre" = [ "objeto" ];
//export const heroes = [

//Otra forma de exportar el contenido del archivo, es una exportación por defecto, la cual se hace de la siguiente forma
//export default [

//para no utilizar el "export en el const" ni la "export default" se puede exportar al final del archivo.
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owner = ['DC','Marvel'];
export default heroes;

//Otra forma de exportar los datos y se tendria que realizar la desestructuración en donde se importe.

//const owner = ['DC','Marvel'];
//en esta expresion, se puede colocar una exportación por default, solo se colocaria el objeto "as default" y en la importación se utiliza las {} para el segundo objeto y realizar la desestructuración.
// export {
//     heroes,
//     owner
// }