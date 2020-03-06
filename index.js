const express = require('express')
const cors = require('cors')
const db = require('./config/db')

// Crear modelos en la BD
require('./models/Producto')
require('./models/Linea')
require('./models/Impuesto')
require('./models/Usuario')
require('./models/Cliente')

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
app.use('/auth', require('./routes/auth'))
app.use('/usuario', require('./routes/usuarios'))
app.use('/producto', require('./routes/productos'))
app.use('/linea', require('./routes/lineas'))
app.use('/impuesto', require('./routes/impuestos'))
app.use('/cliente', require('./routes/clientes'))

// Mostrar el puerto en que está corriendo el proyecto
app.listen(port, function () {
    console.log('API Rest running http://localhost:' + port)
})