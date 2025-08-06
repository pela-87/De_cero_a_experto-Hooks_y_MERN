import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        //const newCategory = 'Samurai X';
        //setCategories([ ...categories, newCategory ]);
        setCategories([ 'Samurai X', ...categories ]);
        //setCategories( cats => [ ...cats, newCategory ] );
        
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        < AddCategory />

        <button onClick={ onAddCategory }>Agregar</button>
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

