const Sequelize = require('sequelize')
const db = require('../config/db')

// Crear esquema de la tabla impuestos
const Impuestos = db.define('impuesto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    valor: Sequelize.FLOAT
})

module.exports = Impuestos