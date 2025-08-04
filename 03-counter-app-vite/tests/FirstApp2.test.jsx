import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en componente <FirstApp> ', () => {
    
    const titulo = 'Hola, soy Goku';
    const subTitulo = 'Soy un subtítulo';

    test ('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={ titulo } /> );
        //expect( getByText(titulo) ).toBeTruthy();
        expect( container ).toMatchSnapshot();
    });

    test ('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<FirstApp title={ titulo } /> );
        //screen.debug();
        expect( screen.getByText(titulo) ).toBeTruthy();
    });

    test ('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={ titulo } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(titulo);
    });

    test('Debe mostrar el subtítulo enviado por props', () => {
        render(<FirstApp title={ titulo } subTitle={ subTitulo } /> );
        expect( screen.getAllByText(subTitulo).length ).toBe(2);
    });
});