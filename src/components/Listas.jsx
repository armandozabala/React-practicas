import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {
            id: 1,
            texto: 'tarea 1'
        },
        {
            id: 2,
            texto: 'tarea 2'
        },
        {
            id: 3,
            texto: 'tarea 3'
        },
    ]

    /*const arrayUno = ['Chile', 'Argentina'];
    const arrayDos = ['Peru', 'Mexico'];

    const unidos = [...arrayUno, ...arrayDos];

    console.log(unidos);*/

    const [lista, setLista] = useState(estadoInicial);

    const agregarElemento = () => {
        
        console.log("click");

        setLista([
            ...lista,
            { id: 4, texto: 'Tarea 4'}
        ])
    }

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map( (item, index) => (
                    <h4 key={ index }> {item.texto} </h4>
                ))
            }
            <button onClick={ () => agregarElemento() }> Agregar </button>
        </div>
    )
}

export default Listas
