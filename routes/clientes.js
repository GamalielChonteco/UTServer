const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

// Obtener todos los clientes
router.get('/', 
    clienteController.obtenerClientes
)

// Obtener un cliente
router.get('/:id', 
    clienteController.obtenerCliente
)

// Crear cliente
router.post('/',
    clienteController.crearCliente
)

// Actualizar cliente
router.put('/:id',
    clienteController.actualizarCliente
)

// Eliminar cliente
router.delete('/:id',
    clienteController.eliminarCliente
)

module.exports = router