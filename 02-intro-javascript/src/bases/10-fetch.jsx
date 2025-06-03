const apiKey = 'gEVqdJooLC4b7UuI6eosqleXi8S5HVBJ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion.then( resp => 
    //las promesas pueden encadenarse.
    // {
    // //console.log(resp);
    // resp.json().then( data => {
    //     console.log( data );
    // })
    //}
    resp.json()
    .then( ({ data }) => {
        //console.log( data.images.original.url )
        const { url } = data.images.original;
        const img = document.createElement( 'img');
        img.src = url;
        document.body.append( img );
    })
)
.catch( console.warn );