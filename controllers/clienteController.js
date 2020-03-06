const Clientes = require('../models/Cliente')

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll()
        res.json({ clientes })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Obtener un cliente
exports.obtenerCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Clientes.findOne({
            where: { id }
        })
        res.json({ cliente })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Crear cliente
exports.crearCliente = async (req, res) => {
    try {
        const cliente = await Clientes.create(req.body)
        
        res.json({ cliente })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Actualizar usuario
exports.actualizarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Clientes.update(req.body, {
            where: { id }
        })
        res.json({ cliente })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Eliminar usuario
exports.eliminarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Clientes.destroy({
            where: { id }
        })
        res.json({ cliente })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
