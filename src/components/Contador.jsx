import React, { } from 'react'

const Contador = () => {

    const [ contador, setContador ] = React.useState(0);

    const aumentar = () => {
        console.log("click");
        setContador(contador + 1);
    }
    
    return (
        <div>
            <h2>Contador</h2>      
            <h3>Nuestro numero: {contador}</h3>
            <h4>
                {contador > 3 ? <span style={{ color: 'green' }}> Es mayor ganaste </span> :  <span style={{color:  'red'}}>Es menor a 3</span>}
            </h4>
            <button className="btn btn-success" onClick={ () => aumentar() }> Aumentar </button>
        </div>
    )
}

export default Contador
