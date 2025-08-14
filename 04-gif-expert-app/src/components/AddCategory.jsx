import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        //esto es realizando la actualizacion de la lista, directamente en este
        //componente y no desde el padre
        //setCategories ( categorie => [ inputValue, ...categorie ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

  return (
    <form onSubmit={ onSubmit }>
        <input type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            //onChange={ (event) => onInputChange(event)}
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};