import "./formulario.css"
import Texto from "../campos"
import ListaOpciones from "../listaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const Evento = (evento) =>{
        evento.preventDefault()
        console.log("Manejando evento",evento)
    }

    return <section className="form">
        <form onSubmit={Evento}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <Texto titulo="Nombre" placeholder="ingresar nombre" required={true}/>
            <Texto titulo="Puesto" placeholder='ingresar puesto' required={true}/>
            <Texto titulo="Foto" placeholder="ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton texto="Crear colaborador">Crear</Boton>
        </form>
    </section>
}

export default Formulario