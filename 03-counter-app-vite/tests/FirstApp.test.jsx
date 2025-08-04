import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en componente <FirstApp> ', () => {

    // test('Debe hacer match con el snapshot',() => {
    //     const titulo = 'Hola, soy Goku';
    //     const { container } = render( <FirstApp title={ titulo } /> );
    //     expect( container ).toMatchSnapshot();

    // });
    
    test ('Debe de mostrar el titulo en un h1', () => {
        const titulo = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={ titulo } /> );
        expect( getByText(titulo) ).toBeTruthy();
        
        //const h1 = container.querySelector('h1');
        //console.log(h1.innerHTML);
        //expect( h1.innerHTML ).toContain( titulo );
        // expect( container.querySelector('h1').innerHTML ).toContain( titulo );
        expect( getByTestId('test-title').innerHTML).toContain( titulo);
    });

    test ('Debe de mostrar el subtitulo enviado por props', () => {
        const titulo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const { getAllByText } = render(<FirstApp title={ titulo } subTitle={ subTitulo } /> );
        expect( getAllByText(subTitulo).length ).toBe(2);
    });
});