//import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
    
    // function heandleAdd (event) {
    //     console.log(event)
    // }

    /* Cuando una funcion no tiene mucho que ver con el componente es aconsejable sacarlo a fuera del componente. */
    const heandleAdd = () => { 
        //console.log( event ) 
        value = 1000;
        console.log(value);
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ heandleAdd }>
                +1
            </button>
        </>
    )
};

// CounterApp.prototype = {
//     value:  PropTypes.number
// }
