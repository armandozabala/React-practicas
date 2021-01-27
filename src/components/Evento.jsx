import React , {Fragment, useState} from 'react'

const Evento = () => {

    const [texto, setTexto] = useState('Texto desde estado');

    //funciones aparte
    const eventoClick = () => {
        console.log("Me diste un click")
        setTexto('Hola soy el setTexto')
    }

    return (
        <Fragment>
            <hr/>
            <h2>{ texto }</h2>
            <button onClick={ () => eventoClick() }>Click</button>
        </Fragment>
    )
}

export default Evento
