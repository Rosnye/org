import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    const {colorPrimario,titulo,id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor,like} = props
    const estiloTitulo = {borderColor:colorPrimario}

    return <>
            { colaboradores.length > 0 &&
            <section className="team" style={{backgroundColor: hexToRgba(colorPrimario,0.6)}}>
                <input
                    type="color"
                    className="inputColor"
                    value={colorPrimario}   
                    onChange={(event) => {actualizarColor(event.target.value,id)}}            
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colabs">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={colaborador.nombre}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
            </div>
        </section>}
    </>

}

export default Equipo