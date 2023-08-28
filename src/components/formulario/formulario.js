import "./formulario.css"
import Campo from "../campos"
import ListaOpciones from "../listaOpciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario = (props) => {

    const [nombre,actualizarN] = useState("")
    const [puesto,actualizarP] = useState("")
    const [foto,actualizarF] = useState("")
    const [equipo,actualizarE] = useState("")

    const [titulo,actualizarT] = useState("")
    const [color,actualizarC] = useState("")

    const {RegistrarColaborador,crearEquipo} = props

    const Evento = (evento) =>{
        evento.preventDefault()
        console.log("Manejando evento",evento)
        let datosEnvio = {
            nombre,
            puesto,
            foto,
            equipo
        }
        RegistrarColaborador(datosEnvio)
    }

    const manejarEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }

    return <section className="form">
        <form onSubmit={Evento}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            
            <Campo titulo="Nombre" placeholder="ingresar nombre" 
            required={true} valor={nombre} setValor={actualizarN}/>

            <Campo titulo="Puesto" placeholder='ingresar puesto' 
            required={true} valor={puesto} setValor={actualizarP}/>
            
            <Campo titulo="Foto" placeholder="ingresar enlace de foto" 
            valor={foto} setValor={actualizarF}/>

            <ListaOpciones valor={equipo} actualizarE={actualizarE} equipos={props.equipos}/>
            <Boton Campo="Crear colaborador">Crear</Boton>
        </form>

        <form onSubmit={manejarEquipo}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            
            <Campo titulo="Titulo" placeholder="ingresar Titulo" 
            required={true} valor={titulo} setValor={actualizarT}/>

            <Campo titulo="Color" placeholder='ingresar color Hexadecimal' 
            required={true} valor={color} setValor={actualizarC} type="color"/>

            <Boton texto="Crear colaborador">Registrar Equipo</Boton>
        </form>

    </section>
}

export default Formulario