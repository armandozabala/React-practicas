import React, { useState } from 'react'
import Contador from './Contador';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Formulario = () => {

    const [lista, setLista] = useState([]);
    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const guardarDatos = (e) => {
        //siempre
        e.preventDefault();
       
        
        if (!fruta.trim() || !descripcion.trim()) {
            console.log('esta vacio fruta o descripcion');
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            return;
        }


        setLista([
            ...lista,
            { fruta, descripcion}
       ])

        e.target.reset();
        setFruta('');
        setDescripcion('');
    }


    return (
        <div>
            <Contador/>
            <h2>Formulario</h2>
            <form onSubmit={  guardarDatos }>
                <input
                    type="text"
                    placeholder="Indique su fruta"
                    className="form-control mb-2"
                    onChange={ e => setFruta(e.target.value) }
                />
                    <input
                    type="text"
                    placeholder="Indique Descripción"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value) }
                />
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                        Agregar
                </button>
                </div>
            </form>

            <ul>
                {
                     lista.map( (item, index) => (
                         <li key={index}>
                             {item.fruta} - {item.descripcion}
                         </li>
                     ))
                 }
            </ul>
        </div>
    )
}

export default Formulario
