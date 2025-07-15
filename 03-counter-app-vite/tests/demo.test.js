describe('Pruebas en <DemoComponent /> que no existe', () => {
    
    test('Esto es el titulo del test', () => {
        
        /* Este código este no es correcto para los test */
        
        /*
         if (1 === 0) {
              throw Error ('No se puede dividir por 0.');
          };
        */
    
        //Los pasos de un test
        //1. Inicialización
        const message1 = 'Hola Mundo';
    
        //2. Estímulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento.. lo esperado.
        expect( message1 ).toBe( message2 );
        
    });

});
