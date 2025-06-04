// Async y await

//Promesa normal
// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https://sdfhdfdsd.com');
//     })
//     return promesa;
// };

//La misma promesa, pero simplificada
// const getImagenPromesa = () => 
//     new Promise(resolve => resolve('https://sdfhdfdsd.com'));

// getImagenPromesa().then( console.log );

//La misma funcion pero con ASYNC
// const getImagen = async() => {
//     return 'https://sdfhdfdsd.com';
// }

// getImagen().then( console.log );

//Utilizando el await
const getImagen = async() => {
    try{
        const apiKey = 'gEVqdJooLC4b7UuI6eosqleXi8S5HVBJ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement( 'img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        //manejo del error
        console.log( error );
    }
}

getImagen();
    
