//Desestructuración con arreglos.

const personajes = ['Goku', 'Vegeta','Trunks'];

//Esta seria la forma normal.
// console.log(personajes);
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

//se asigna los valores del arreglo por su indice, si queremos otro elemento, solamente tenemos que indicar en la desustructuracion que ese indice lo ignore, colocando una "," para que referencia el indice. Ej: queremos a Vegeta.
const [ , , p1 ] = personajes;
console.log( p1 );

const retornaArreglo = () => {
    return ['ABC',123];
}
const arr = retornaArreglo ();
console.log( arr );
const [letra, numero] = retornaArreglo ();
console.log( letra, numero );

//Tarea
//1. el primer valor del arr2 se llamará nombre
//2. el segundo se llamará setNombre
const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola mundo.') } ];
}
//const arr2 = useState ( 'Goku' );
//console.log(arr2);
//llamo la función que tiene el arreglo.
//arr2[1]();
const [  nombre, setNombre] = useState ( 'Goku' );
console.log( nombre );
setNombre();
