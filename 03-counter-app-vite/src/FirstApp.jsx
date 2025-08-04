/*
Se puede mostrar varios elementos dentro de un componte si
se encapsila dentro de un DIV, pero esto genera en la vista
un nuevo DIV que puede romper el doseño.
*/
/*
export const FirstApp = () => {
    return (
    <div>
        <h1>Primer componente..!!!</h1>
        <p>lalalal </p>
    </div>
    )
};
*/ 

/*
De esta forma se importa un fragmento, para que se pueda enviar
mas de un elemento en el componente y a la vez en el componente
se agrupa dentro de la etiqueta Fragment.
*/
/*
import { Fragment } from "react";

export const FirstApp = () => {
    return (
    <Fragment>
        <h1>Primer componente..!!!</h1>
        <p>lalalal </p>
    </Fragment>
    )
}; 
*/

/*
Esta es una forma mas sencilla de utilizar un Fragment dentro
de la vista y mostrar varios elementos dentro del componente,
que se esta utilizando en la nueva version de React.
*/
/*
export const FirstApp = () => {
    return (
    <>
      <h1>Primer componente..!!!</h1>
      <p>lalalal </p>
    </>
    )
}; 
*/


// const newMessage = 'Pela';
// const newMessage = {
//     Nombre: 'Pela',
//     Edad: 38
// };

// function getNombre (){
//     return newMessage.Nombre + ' ' 
//     + newMessage.Edad;
// };

// export const FirstApp = () => {
//     return (
//     <>
//         {/* <h1> { newMessage.Nombre  } </h1>
//         <h1> { newMessage.Edad  } </h1> */}
//         {/* <h1> { JSON.stringify( newMessage ) } </h1> */}
//         {/* <h1> { getNombre(  ) } </h1> */}
//         <h1>Pela</h1>
//         <p>lalalal </p>
//     </>
//     )
// }; 

/*
//Props

//Pueden venir como props o desestructurado {objeto}.

// export const FirstApp = ( { title, subTitle }) => {
//     //console.log(props);
//     return (
//     <>        
//         <h1>{ title }</h1>
//         <p>Esto es un parrafo.</p>
//         <p>{ subTitle }</p>
//     </>
//     )
// }; 
*/

//PropTypes
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name }) => {
        
    return (
    <>        
        <h1 data-testid="test-title"> { title } </h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
    )
}; 

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Pela',
};