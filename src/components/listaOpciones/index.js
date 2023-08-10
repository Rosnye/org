import "./lista.css"
const ListaOpciones = () => {

    const equipos = [
        "Programacion",
        "Front end",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Innovacion y gestion"
    ]
    return <div className="listaOpc">
        <label>
            Equipos
        </label>
        <select>
            {equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones