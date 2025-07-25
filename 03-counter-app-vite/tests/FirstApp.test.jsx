import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en componente <FirstApp> ', () => {

    test('Debe hacer match con el snapshot',() => {
        const titulo = 'Hola, soy Goku';
        render( <FirstApp title={ titulo }/> );
    });
});