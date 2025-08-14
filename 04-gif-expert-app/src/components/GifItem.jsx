import PropTypes from 'prop-types';

export const GifItem = ( { url, title }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p> { title } </p>
    </div>
  )
}

/* Tarea 

1- Añadir PropTypes. Se tiene que instalar yarn add prop-types
 a) title obligatorio
 b) url obligatorio

2- Evaluar el Snapshot.

*/

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
