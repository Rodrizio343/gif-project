import React from 'react'
import './Gif.css'
import {Link} from 'wouter'

const Gif = ({title, id, url}) => {
    return (
        <Link to={`/gif/${id}`} className='Gif-link'>
            <h4>{title}</h4>
            {/* <span>{id}</span>  */}
            <img alt={title} src={url}/>
        </Link>
    )
}
//React.memo evita que un componente se renderize si sus props no cambian
export default React.memo(Gif, (prevProps, nextProps)=>{
    return prevProps.id === nextProps.id
})

//React.memo compara prevProps vs nextProps y si son iguales => true => no renderiza
//En el caso de que se pasen objetos por props {...props} (siempre crea un nuevo objeto), memo no lo reconoce internamente y el compoenente vuelve a renderizar
//Para evitarlo se toma como referencia un dato que no cambie para realizar la comparacion. Ej: id.