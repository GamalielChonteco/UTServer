const express = require('express')
const router = express.Router()

const lineaController = require('../controllers/lineaController')
const auth = require('../middleware/auth')

// Obtener todos las lineas
router.get('/',
    auth,
    lineaController.obtenerLineas
)

// Obtener una linea
router.get('/:id',
    auth, 
    lineaController.obtenerLinea
)

// Crear linea
router.post('/',
    auth,
    lineaController.crearLinea
)

// Actualizar linea
router.put('/:id',
    auth,
    lineaController.actualizarLinea
)

// Eliminar linea
router.delete('/:id',
    auth,
    lineaController.eliminarLinea
)

module.exports = router