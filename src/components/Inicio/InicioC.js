import { Link } from "react-router-dom";
import "./Inicio.css";

function InicioC() {
    return (
        <body class="bodyI">
            <div class="contenido">
                <h1 class="h1">Bienvenido, ¡Aprende y pon a prueba los comandos de Mongo DB!</h1>
                <Link to="/preguntas" class="boton"><button class="boton">Comenzar</button></Link>
            </div>
        </body>

    )
}
export default InicioC;