const { QueryTypes } = require('sequelize')
const db = require('../config/db')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.autenticarAlumno = async (req, res) => {
    // Revisa si hay errores
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

    // Extraer user y password
    const { matricula, password } = req.body
    
    try {
        // Revisa que el alumno este registrado
        let alumno = await db.query(
            `SELECT a.id_alumno, a.matricula, a.password, a.estado, g.nombre as grupo, p.id_periodo as periodo, g.cuatrimestre
             FROM alumnos as a
             join alumnos_grupos as ag on a.id_alumno = ag.id_alumno
             join grupos as g on ag.id_grupo = g.id_grupo
             join periodos as p on p.id_periodo = g.id_periodo
             WHERE a.matricula = :matricula
             ORDER BY g.id_grupo DESC LIMIT 1
            `, {
            replacements: { matricula: matricula },
            type: QueryTypes.SELECT
        })
        if (!alumno) {
            return res.status(400).json({ msg: 'Alumno no encontrado' })
        }

        // Revisa el password
        let passCorrecto;

        (password == alumno[0].password) ? passCorrecto = true : passCorrecto = false

        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' })
        }

        // Si todo está correcto crea y firma el JWT
        const payload = {
            alumno: {
                id: alumno.id_alumno
            }
        }

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error

            // Mensaje de confirmacion
            res.json({ token, alumno })
        })
    } catch (error) {
        console.log(error)
    }

}
