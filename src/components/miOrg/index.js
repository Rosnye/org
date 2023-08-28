import "./miOrg.css"

const MiOrg = (props) => {

    //console.log(useState())
    //const [mostrar,Actualizar] = useState(false)
    //const manejarClick = () =>{
    //    console.log("elemento")
    //    Actualizar(!mostrar)
    //}
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg