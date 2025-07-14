import { useState } from 'react';
//import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
    
    // function heandleAdd (event) {
        //     console.log(event)
        // }

    //Hooks
    const [counter, setCounter] = useState(value);

    /* Cuando una funcion no tiene mucho que ver con el componente es aconsejable sacarlo a fuera del componente. */
    const heandleAdd = () => { 
        //console.log( event ) 
        // value = 1000;
        // console.log(value);
        
        //Hooks
        //setCounter(counter + 1);
        //setCounter( () => counter + 1);
        setCounter( ( c ) => c + 1);

    }

    const heandleResta = () => setCounter( counter - 1);

    const heandleReset = () => setCounter(value);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ heandleAdd }> 
                +1 
            </button>
            <button onClick={ heandleResta }> 
                -1 
            </button>
            <button onClick={ heandleReset }> 
                Reset 
            </button>
        </>
    )
};

// CounterApp.prototype = {
//     value:  PropTypes.number
// }
