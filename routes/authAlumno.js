const express = require('express')
const router = express.Router()
const authAlumnoController = require('../controllers/authAlumnoController')

// Iniciar sesión
router.post('/',
    authAlumnoController.autenticarAlumno
)

module.exports = router