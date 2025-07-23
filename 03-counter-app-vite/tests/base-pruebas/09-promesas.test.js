
describe('Pruebas en 09-promesas.js', () => {
    
    //Pasando el done le indicamos a Jest que la prueba es asíncrona y debe esperar a 
    //que se resuelva la promesa.
    test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

     test('getHeroeByIdAsync debe obtener un error si hereo no existe', ( done ) => {
        const id = 100; // ID que no existe
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe(`No se pudo encontrar el héroe con id ${100}`);
                done();
            });
    });

});