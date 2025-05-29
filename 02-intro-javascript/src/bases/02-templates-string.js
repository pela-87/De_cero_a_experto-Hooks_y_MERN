
const nombre = 'Jonatan';
const apellido = 'Villarruel';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
const mensaje = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);
console.log(mensaje);

function getSaludo (nombre) {
    return 'Hola ' + nombre;
}

//console.log(`Este es un texto: ${getSaludo()}`);
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);