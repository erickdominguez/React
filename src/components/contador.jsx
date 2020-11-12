import React, {useState} from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Agregar</button>
        </div>
    )
}

export default Contador
