const Impuestos = require('../models/Impuesto')

// Obtener todos los impuestos
exports.obtenerImpuestos = async (req, res) => {
    try {
        const impuestos = await Impuestos.findAll()
        res.json({ impuestos })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Obtener un impuesto
exports.obtenerImpuesto = async (req, res) => {
    const { id } = req.params
    try {
        const impuesto = await Impuestos.findOne({
            where: { id }
        })
        res.json({ impuesto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Crear impuesto
exports.crearImpuesto = async (req, res) => {
    try {
        const impuesto = await Impuestos.create(req.body)
        res.json({ impuesto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Actualizar impuesto
exports.actualizarImpuesto = async (req, res) => {
    const { id } = req.params
    try {
        const impuesto = await Impuestos.update(req.body, {
            where: { id }
        })
        res.json({ impuesto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Eliminar impuesto
exports.eliminarImpuesto = async (req, res) => {
    const { id } = req.params
    try {
        const impuesto = await Impuestos.destroy({
            where: { id }
        })
        res.json({ impuesto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
