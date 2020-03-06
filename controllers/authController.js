const Usuarios = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.autenticarUsuario = async (req, res) => {
    // Revisa si hay errores
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    // Extraer user y password
    const { username, password } = req.body
    
    try {
        // Revisa que el usuario este registrado
        let usuario = await Usuarios.findOne({
            where: { username }
        })

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' })
        }

        usuario = usuario.dataValues

        // Revisa el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password)

        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' })
        }

        // Si todo está correcto crea y firma el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        }

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error

            // Mensaje de confirmacion
            res.json({ token })
        })
    } catch (error) {
        console.log(error)
    }

}

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuarios.findOne({
            attributes: ['id', 'nombre', 'ap_paterno', 'ap_materno', 'tipo_usuario', 'username'],
            where: { id: req.usuario.id }
        })
        res.json({ usuario })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Hubo un error' })
    }
}