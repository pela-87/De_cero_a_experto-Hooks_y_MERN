import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['One Punch']);

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
    
        { categories.map( (category) => (
                <GifGrid 
                    key= { category }
                    category={ category }
                />
            ))
        }
    

        {/* Lista de Gif */}
        {/* Gif Item */}
    </>
  )
}

