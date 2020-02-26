const Lineas = require('../models/Linea')

// Obtener todos las lineas
exports.obtenerLineas = async (req, res) => {
    try {
        const lineas = await Lineas.findAll()
        res.json({ lineas })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Obtener una linea
exports.obtenerLinea = async (req, res) => {
    const { id } = req.params
    try {
        const linea = await Lineas.findOne({
            where: { id }
        })
        res.json({ linea })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Crear linea
exports.crearLinea = async (req, res) => {
    try {
        const linea = await Lineas.create(req.body)
        res.json({ linea })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Actualizar linea
exports.actualizarLinea = async (req, res) => {
    const { id } = req.params
    try {
        const linea = await Lineas.update(req.body, {
            where: { id }
        })
        res.json({ linea })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Eliminar linea
exports.eliminarLinea = async (req, res) => {
    const { id } = req.params
    try {
        const linea = await Lineas.destroy({
            where: { id }
        })
        res.json({ linea })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
