const Usuarios = require('../models/Usuario')
const bcryptjs = require('bcryptjs')

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll({
            attributes: ['id', 'nombre', 'ap_paterno', 'ap_materno', 'tipo_usuario', 'username', 'insert_producto', 'update_producto', 'delete_producto', 'agregar_linea', 'actualizar_linea', 'eliminar_linea', 'realizar_corte', 'realizar_venta']
        })
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
            attributes: ['id', 'nombre', 'ap_paterno', 'ap_materno', 'tipo_usuario', 'username'],
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

        res.json({ usuario })
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

// Actualizar contraseña
exports.actualizarPassword = async (req, res) => {

    const { id } = req.params
    const { password_actual, password_nueva } = req.body

    try {
        let usuario = await Usuarios.findOne({
            where: { id }
        })

        // Revisa el password
        const passCorrecto = await bcryptjs.compare(password_actual, usuario.password)

        if (!passCorrecto) {
            return res.status(400).json({ msg: 'La contraseña actual es incorrecta' })
        }

        const salt = await bcryptjs.genSalt(10)
        usuario.password = await bcryptjs.hash(password_nueva, salt)

        await usuario.save()

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
