export const getGifs = async( category ) => {
    const cantGifs = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gEVqdJooLC4b7UuI6eosqleXi8S5HVBJ&q=${ category }&limit=${ cantGifs }`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        })
    );
    console.log( gifs );
    return gifs;
};