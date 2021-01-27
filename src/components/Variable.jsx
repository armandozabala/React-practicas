import React from 'react'

const Variable = () => {

    const saludo = 'soy el string saludo';
    const img = 'https://picsum.photos/200/300'

    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src={img} alt=""/>
        </div>
    )
}

export default Variable
