import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe ('Probando el 05-funciones', () => {
    
    test('Se prueba getUsuario. Se espera que retorne un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( userTest ).toEqual( user );
    });

    test('Se prueba getUsuarioActivo. Se espera que retorne un objeto, pero con el nombre que se pasa', () => {
        const usuario = 'Pela';
        const objetoTest = getUsuarioActivo( usuario );

        expect ( objetoTest ).toEqual({
            uid: 'ABC567',
            username: usuario
        })

    })
})