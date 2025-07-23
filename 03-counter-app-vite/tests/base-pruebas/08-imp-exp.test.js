export { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
export { heroes } from '../../src/data/heroes';

describe ('Probando 08-imp-exp', () => {
    
    test('getHeroeById Debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
    });   

    test('getHeroeById Debe retornar un undefined cuando no existe el heroe', () => {
        
        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();
    });   

    //Tarea
    //Debe de retornar un arreglo con los heroes de DC
    //Length === 3
    //toEqual al arreglo filtrado

    test('getHeroesByOwner retorna los heroes de DC del owner', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ] );

        //Este es otra forma de comprobar que el filtro funciona
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
    });

    // Debe de retornar un arreglo con los heroes de Marvel
    // Length === 2
    test('getHeroesByOwner retorna los heroes de Marvel del owner', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Hulk', owner: 'Marvel' }
        ] );

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
    });
   
});