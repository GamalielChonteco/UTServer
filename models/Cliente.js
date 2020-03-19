const Sequelize = require('sequelize')
const db = require('../config/db')


const Clientes = db.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    direccion: Sequelize.STRING,
    rfc: Sequelize.STRING
})

module.exports = Clientes