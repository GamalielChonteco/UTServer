const Sequelize = require('sequelize')
const db = require('../config/db')
const bcryptjs = require('bcryptjs')

const Usuarios = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    tipo_usuario: Sequelize.STRING,
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate(usuario) {
            usuario.password = bcryptjs.hashSync(usuario.password, bcryptjs.genSaltSync(10))
        }
    }
})

module.exports = Usuarios