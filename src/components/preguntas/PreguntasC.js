import { Link } from "react-router-dom";
import "./preguntas.css";

function PreguntasC() {
    return (
        <body class="bodyP">
    <div class="contenidoP">
        <Link to="/"><i class="fa-solid fa-house"></i>Inicio</Link>
        <form>
            <h2 class="h2P">¡Aprende y responde!</h2>
                <h2 class="h3P">Crear Base de datos</h2>
            <p>Primeramente, para poder interactuar con Mongodb, debemos crear una base de datos,
                Como primer paso Debemos utilizar “use” para poder entrar a la base de datos o crearla
                <br></br>
                Luego de ingresar use en la consola debemos ingresar el nombre que le daremos a nuestra base de datos, como, por ejemplo:
                “use disquera”
            </p>
            
            <h3 class="h3P">Crear coleccion</h3>
                <p>Para poder ingresar documentos BSON, estos son ficheros JSON binarizados, dentro de nuestra bd es importante crear colecciones 
                    Esta es la sintaxis: db.createCollection(“cancion”)
                </p>

                
                <a href="#"><button class="boton2">Ejecutar </button></a>
        </form>
    </div>
</body>

    )
}
export default PreguntasC;