import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        //const newCategory = 'Samurai X';
        //setCategories([ ...categories, newCategory ]);
        //setCategories([ 'Samurai X', ...categories ]);
        //setCategories( cats => [ ...cats, newCategory ] );

        //actualizando la lista desde el componente padre
        //console.log( newCategory );
        //if ( categories.includes( newCategory ) ) return;
        if ( categories.toString().toLowerCase().includes( newCategory.toLowerCase() ) ) return;

        setCategories([ newCategory, ...categories ]);
        
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        < AddCategory 
            // Esta forma utiliza al componente hijo para actualizar la lista y no 
            // al componente Padre.
            // setCategories= { setCategories } 
            onNewCategory = { onAddCategory }
        />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
    <ol>
        { categories.map( (category) => {
            return <li key={ category }>
                        { category }
                   </li>
            })
        }
    </ol>
        {/* Lista de Gif */}
        {/* Gif Item */}
    </>
  )
}

