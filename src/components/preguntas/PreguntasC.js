import { Link } from "react-router-dom";
import "./preguntas.css";

function PreguntasC() {
    return (
        <body class="bodyP">
    <div class="contenidoP">
        <Link to="/"><i class="fa-solid fa-house"></i>Inicio</Link>
        <form>
            <h2 class="h2P">¡Aprende y responde!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque voluptatum placeat ipsa
                corrupti nemo voluptates nesciunt. Quasi et cumque, molestias eum minima, iusto quas numquam adipisci
                corporis, delectus harum.</p>
            <div class="form-group">
                <label for="formGroupExampleInput">Pregunta 1</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Pregunta 2</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div><br/>
            <h3 class="h3P">Prueba practica</h3>
                <p>Una vez que hayas leido acerca de los comandos de mongo, realiza la prueba practica
                    desde la consola de mongo, ¡Presiona en el botón!
                </p>
                <a href="#"><button class="boton2">Ejecutar </button></a>
        </form>
    </div>
</body>

    )
}
export default PreguntasC;