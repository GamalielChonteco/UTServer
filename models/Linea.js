const Sequelize = require('sequelize')
const db = require('../config/db')

// Crear esquema de la tabla lineas
const Lineas = db.define('linea', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING
})

module.exports = Lineas