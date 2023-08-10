import "./campos.css"

const Texto = (props) => {
//    console.log("Datos:",props.titulo)
    const placeMod = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeMod} required={props.required}/>
    </div>
}

export default Texto