//Promesas
import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout ( () => {
//         //console.log('Se ejecuta dentro de la promesa.');
//         //llamo al resolve para que ejecute el then
//         //resolve();
//         //Tarea: Importar el archivo de heroes e imprimirlo en consola
//         const heroe = getHeroeById(2);
//         //console.log(heroe);
//         resolve (heroe);
//         //reject('No se pudo encontrar el heroe.');
//     }, 2000);
// });

// promesa.then( ( valor ) => {
//     console.log('Heroe: ', valor);
// })
// .catch( err => console.log( err ));

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    setTimeout ( () => {
        //console.log('Se ejecuta dentro de la promesa.');
        //llamo al resolve para que ejecute el then
        //resolve();
        //Tarea: Importar el archivo de heroes e imprimirlo en consola
        const heroe = getHeroeById(id);
        //console.log(heroe);        
        if (heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el heroe.');
        }
    }, 2000);
});
}

getHeroeByIdAsync(2)
    // .then( heroe => console.log( 'Heroe: ', heroe ))
    .then( console.log )
    // .catch( err => console.warn( err ));
    .catch( console.warn);