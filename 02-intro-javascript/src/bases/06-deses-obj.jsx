//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre : 'Pela',
    edad : 38,
    clave: 'pela1234'
};

//para mostrar los datos del objeto
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//con la desestrucuración
//const {nombre} = persona;

//console.log(nombre);

//si ya tenemos una variable llamada "nombre" podemos renombrarla
//const {nombre: nombre2} = persona;

//console.log(nombre2);

//no es necesario que este en el mismo orden, solamente que tengan los mismos nombres.
// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = ( usuario ) => {
//     //console.log(usuario)
//     //tambien se pueda hacer asi
//     const {edad, nombre, clave} = usuario;
//     console.log(nombre, clave, edad);
    
// }

//Para desestructurarlo lo podemos hacer directamente indicando en las llave de los parametros lo que queremos.
//También se pueden definir valores por defecto aunque no esten dentro del objeto.
const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    //console.log( edad, nombre, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.3475,
            lng: -14.2377
        }
    };
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext ( persona );
//tambien se puede realizar la desestructuración a parte, pero de la forma anterior nos evitamos una linea.
//const {lat, lng} = latlng;

console.log(nombreClave, anios);
//console.log(latlng);
console.log(lat, lng);
