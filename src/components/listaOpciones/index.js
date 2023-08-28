import "./lista.css"
const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log("cambio de opcion",e.target.value)
        props.actualizarE(e.target.value)
    }
    return <div className="listaOpc">
        <label>
            Equipos
        </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo,index)=> <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones