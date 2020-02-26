const Sequelize = require('sequelize')
const db = require('../config/db')

// Crear esquema de la tabla productos
const Productos = db.define('producto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    codigo: Sequelize.STRING,
    precio_1: Sequelize.FLOAT,
    precio_2: Sequelize.FLOAT,
    precio_3: Sequelize.FLOAT,
    cantidad_1: Sequelize.FLOAT,
    cantidad_2: Sequelize.FLOAT,
    cantidad_3: Sequelize.FLOAT,
    costo: Sequelize.FLOAT,
    activo: Sequelize.INTEGER,
    marca: Sequelize.STRING,
    existencia: Sequelize.FLOAT,
    linea: Sequelize.INTEGER,
    impuesto: Sequelize.INTEGER
})

module.exports = Productos