//import { useState } from "react"
import "./campos.css"

const Campo = (props) => {


    const {type = "text"} = props
    //const [valor,setValor] = useState("")
    const manejarCambio = (e) =>{
        //console.log(e.target.value)
        props.setValor(e.target.value)
    }
    //    console.log("Datos:",props.titulo)
    const placeMod = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeMod} required={props.required} value={props.valor} onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo