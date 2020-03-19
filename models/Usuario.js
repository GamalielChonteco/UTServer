const Sequelize = require('sequelize')
const db = require('../config/db')
const bcryptjs = require('bcryptjs')

const Usuarios = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ap_paterno: Sequelize.STRING,
    ap_materno: Sequelize.STRING,
    tipo_usuario: {
        type: Sequelize.INTEGER,
        unique: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    insert_producto: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    update_producto: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    delete_producto: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    agregar_linea: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    actualizar_linea: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    eliminar_linea: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    realizar_corte: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    realizar_venta: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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