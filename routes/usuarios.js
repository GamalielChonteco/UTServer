const express = require('express')
const router = express.Router()

const usuarioController = require('../controllers/usuarioController')

// Obtener todos los usuario
router.get('/', 
    usuarioController.obtenerUsuarios
)

// Obtener un usuario
router.get('/:id', 
    usuarioController.obtenerUsuario
)

// Crear usuario
router.post('/',
    usuarioController.crearUsuario
)

// Actualizar usuario
router.put('/:id',
    usuarioController.actualizarUsuario
)

// Actualizar contraseña
router.put('/password/:id',
    usuarioController.actualizarPassword
)

// Eliminar usuario
router.delete('/:id',
    usuarioController.eliminarUsuario
)

module.exports = router