//Importar archivos para utilizar

//Una forma de importar contenido
//import { heroes } from './data/heroes';

//Segunda forma de importar contenido, a travez de snipper "imp" y la "tab".
//La importacion sin las {} es utilizando la exportación al final del archivo y al utilizar mas de una exportacón se utilizan las {} como si fuera desestructuración.
import  heroes, { owner }  from '../data/heroes';

//La destructuración es para cuando se utiliza un export con los objetos adentro.
//import { heroes,  owner }  from './data/heroes';

//console.log( owner );

//Otra forma de importar el contenido de los archivos, se puede realizar de la siguiente forma.
// import heroes from './data/heroes';

//console.log( heroes );

// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => heroe.id === id);   
// }

// const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);   

//console.log( getHeroeById(2) );

// const getHeroeByOwner = ( owner) => heroes.filter( (heroe ) => heroe.owner === owner);

// console.log( getHeroeByOwner( 'DC' ));

//Lo mismo que lo anterior, pero convirtiendo todo a mayuscula o minuscula, ya que es CaseSensitive
// const getHeroeByOwner2 = ( owner) => heroes.filter( (heroe ) => heroe.owner.toLowerCase() === owner.toLowerCase());

//console.log( getHeroeByOwner2( 'marvel' ));

export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);   

export const getHeroeByOwner2 = ( owner) => heroes.filter( (heroe ) => heroe.owner.toLowerCase() === owner.toLowerCase());