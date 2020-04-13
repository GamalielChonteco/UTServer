const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

// Obtener periodos
router.get('/:id_alumno', 
    alumnoController.obtenerPeriodos
)

module.exports = router