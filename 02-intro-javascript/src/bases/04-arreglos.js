//arreglos en JS

//se puede definir un tamaño, pero no significa que ese va a ser el tamaño total, se le pueden seguir agregando elementos.
/*
const arreglito = new Array(100);
console.log(arreglito);
arreglito.push(1);
console.log(arreglito);
*/

const arreglo = [1,2,3,4];
//no es recomendable usar el push ya que altera al objeto principal, es caso de querer agregar un elemento se utiliza el operador splice.
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//utilizando el operador spret se puede agregar un elemento mas fail, con una copia-
let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map( function(numero){
    return 2 * numero;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
