const Usuarios = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll()
        res.json({ usuarios })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Obtener un usuario
exports.obtenerUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await Usuarios.findOne({
            where: { id }
        })
        res.json({ usuario })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Crear usuario
exports.crearUsuario = async (req, res) => {

    const { username } = req.body

    try {
        // Revisar que el usuario registrado sea unico
        let usuario = await Usuarios.findOne({
            where: { username }
        })

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' })
        }

        usuario = await Usuarios.create(req.body)
        
        res.status(400).json({ usuario })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await Usuarios.update(req.body, {
            where: { id }
        })
        res.json({ usuario })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const usuario = await Usuarios.destroy({
            where: { id }
        })
        res.json({ usuario })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
