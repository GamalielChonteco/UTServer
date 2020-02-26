const express = require('express')
const router = express.Router()

const impuestoController = require('../controllers/impuestoController')
const auth = require('../middleware/auth')

// Obtener todos los impuestos
router.get('/',
    auth,
    impuestoController.obtenerImpuestos
)

// Obtener un impuesto
router.get('/:id',
    auth,
    impuestoController.obtenerImpuesto
)

// Crear impuesto
router.post('/',
    auth,
    impuestoController.crearImpuesto
)

// Actualizar impuesto
router.put('/:id',
    auth,
    impuestoController.actualizarImpuesto
)

// Eliminar impuesto
router.delete('/:id',
    auth,
    impuestoController.eliminarImpuesto
)

module.exports = router