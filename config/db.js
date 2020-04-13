const Sequelize = require('sequelize')
require('dotenv').config({ path: 'variables.env' })

// Crear instancia de la BD
const db = new Sequelize('utvco', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = db