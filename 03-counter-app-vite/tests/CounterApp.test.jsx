import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

//Tarea
// Pruebas en el <CounterApp />
//- Debe de hacer match con el snapshot
//- Debe de mostrar el valor por defecto de 100


describe('Proando componente <CounterApp />', () => {
    const inicialValue = 10;

    test('Debe de hacer match con el snapshot', () => {
        const container = render(<CounterApp value={inicialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        render(<CounterApp value={ 100 } />);
        expect(screen.getByText( 100 )).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    });

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={ inicialValue } />);
        fireEvent.click(screen.getByText('+1'));
        expect( screen.getByText( '11' ) ).toBeTruthy();
    });

    test('Debe de decrementar con el botón -1', () => {
        render(<CounterApp value= { inicialValue } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        expect( screen.getByText( '9' ) ).toBeTruthy();
    });

    test('Debe de reiniciar con el botón reset', () => {
        render(<CounterApp value={ inicialValue } />);
        fireEvent.click( screen.getByText( '+1' ) );
        fireEvent.click( screen.getByText( '+1' ) );
        fireEvent.click( screen.getByText( '+1' ) );
        //screen.debug();
        //fireEvent.click( screen.getByText( 'Reset'));
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }));
        //screen.debug();
        expect( screen.getByText( inicialValue ) ).toBeTruthy();
    });
});