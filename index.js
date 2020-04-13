const express = require('express')
const cors = require('cors')
const db = require('./config/db')

// Generar conexión
db.sync()
    .then(() => console.log('Conectado'))
    .catch(error => console.log(error))

// Crear servidor
var app = express()

// Habilitar CORS
app.use(cors())

// Convertir a objetos JSON las peticiones http
app.use(express.json({
    extended: false
}))

// Establecer puerto
var port = process.env.PORT || 5000

// Importar rutas
app.use('/authAlumno', require('./routes/authAlumno'))
app.use('/alumno', require('./routes/alumnos'))
app.use('/periodo', require('./routes/periodos'))

// Mostrar el puerto en que está corriendo el proyecto
app.listen(port, function () {
    console.log('API Rest running http://localhost:' + port)
})