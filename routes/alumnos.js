const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

// Obtener todos los usuario
router.get('/', 
    alumnoController.obtenerAlumnos
)

// Obtener calificaciones
router.get('/:id_alumno/:cuatrimestre', 
    alumnoController.obtenerCalificacionNormal
)

// Obtener calificaciones
router.get('/estadia/:id_alumno/:cuatrimestre', 
    alumnoController.obtenerCalificacionEstadia
)

module.exports = router