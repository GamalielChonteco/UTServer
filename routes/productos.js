const express = require('express')
const router = express.Router()

const productoController = require('../controllers/productoController')
const auth = require('../middleware/auth')

// Obtener todos los productos
router.get('/',
    auth,
    productoController.obtenerProductos
)

// Obtener un producto
router.get('/:id',
    auth,
    productoController.obtenerProducto
)

// Crear producto
router.post('/',
    auth,
    productoController.crearProducto
)

// Actualizar producto
router.put('/:id',
    auth,
    productoController.actualizarProducto
)

// Eliminar producto
router.delete('/:id',
    auth,
    productoController.eliminarProducto
)

module.exports = router