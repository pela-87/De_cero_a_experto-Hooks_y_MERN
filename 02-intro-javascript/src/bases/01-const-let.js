//Constantes y variables 
const nombre = 'Pela';
const apellido = 'Villarruel';

let valorDado = 5;
valorDado = 3;

console.log(nombre, apellido, valorDado);

// var NO se debe usar..
if (true)
{
    let valorDado = 6;
    console.log(valorDado);
    //esta variable pertenece a este scout nada mas.
    let segundoNombre = 'Santiago';
    console.log(segundoNombre);
}

console.log(valorDado);
console.log(segundoNombre);