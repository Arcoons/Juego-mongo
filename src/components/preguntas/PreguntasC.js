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
                    Esta es la sintaxis: db.createCollection('cancion')
                </p>

                <h3 class="h3P">Insertar documentos a las colecciones</h3>
                <p>
                    Ahora si queremos ingresar documentos en nuestra bd debemos llamar la colección creada, en este caso es “cancion” seguido de un “insert” dependiendo la cantidad de valores y los valores
                    <br></br>
                    Insert es para ingresar varios valores
                    <br></br>
                    InsertOne es para uno
                    <br></br>
                    InsertMany para ingresar muchos
                    <br></br>
                    Esta sería la sintaxis: db.cancion.insert "()" dentro de los parentesis ingresamos unos corchetes y dentro de los corchetes ingresamos nombre: 'Many Men'
                </p>

                <h3 class="h3P">Consultar coleccion</h3>
                <p>
                    Si deseamos consultar solo llamamos “db” junto a nuestra colección “cancion” creada y “.find” para traer el o los documentos creados en nuestra colección 
                    db.cancion.find()
                </p>

                <h3 class="h3P">Actualizar</h3>
                <p>
                    Para actualizar debmos utilizar “update”, y “$set” para actualizar un campo en concreto, primero escribimos el nombre de la canción que ya esta creada y luego a el nombre nuevo
                    <br></br>
                    db.cancion.update "()" dentro de los parentesis unos corchetes con la propiedad a cambiar "nombre: “Many Men”" "," corchetes y dentro de ellos "$set:", luego otros corchetes con la nueva propiedad a ingresar "nombre: “Kronicalles”
                </p>

                <h3 class="h3P">Eliminar documento</h3>
                <p>
                    Debes ingresar “db” seguido de el nombre de la colección “cancion” y un “.delete” y dentro ingresamos un dato que haya en el documento
                    Por ejemplo: 
                    <br></br>
                    db.cancion.deleteOne() dentro de los parentesis ingresamos corchetes seguido de un valor ya creado como nombre: “Many Men”
                </p>

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