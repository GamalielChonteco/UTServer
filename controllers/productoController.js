const Productos = require('../models/Producto')

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Productos.findAll()
        res.json({ productos })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Obtener un producto
exports.obtenerProducto = async (req, res) => {
    const { id } = req.params
    try {
        const producto = await Productos.findOne({
            where: { id }
        })
        res.json({ producto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Crear producto
exports.crearProducto = async (req, res) => {
    try {
        const producto = await Productos.create(req.body)
        res.json({ producto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Actualizar producto
exports.actualizarProducto = async (req, res) => {
    const { id } = req.params
    try {
        const producto = await Productos.update(req.body, {
            where: { id }
        })

        res.json({ producto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

// Eliminar producto
exports.eliminarProducto = async (req, res) => {
    const { id } = req.params
    try {
        const producto = await Productos.destroy({
            where: { id }
        })
        res.json({ producto })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
