import React, {useState} from 'react'

const Foco = (props) => {
    
    const [status, setStatus] = useState(false)
    const switchStatus = () => {
        setStatus(status => !status)
    }

    return (
        <div>
            <img src={ status ? "img/focoOn.png" : "img/focoOff.png"}
            onClick={switchStatus} alt=""
            />
            <p>
                {props.lugar}
            </p>
            
            
        </div>
    )
}

export default Foco
