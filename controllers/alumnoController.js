const { QueryTypes } = require('sequelize')
const db = require('../config/db')

// Obtener todos los usuarios
exports.obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await db.query('SELECT * FROM alumnos', { type: QueryTypes.SELECT })
        res.json({ alumnos })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerCalificacionNormal = async (req, res) => {

    const { id_alumno, cuatrimestre } = req.params

    try {
        let calificaciones = await db.query(
            `SELECT m.nombre as materia, c.primer as primero, c.segundo, c.tercero
             FROM grupos_materias as gm, calificaciones as c, materias as m, grupos as g, alumnos_grupos as ag, periodos as p
             WHERE g.cuatrimestre = :cuatrimestre
             AND ag.id_alumno = :id_alumno
             AND ag.id_grupo = g.id_grupo
             AND g.id_grupo = gm.id_grupo
             AND m.id_materia = gm.id_materia
             AND c.id_g_m = gm.id_g_m
             AND c.id_alumno = :id_alumno
             GROUP BY m.nombre
             ORDER BY m.id_materia ASC
            `,
            {
                replacements: { id_alumno, cuatrimestre },
                type: QueryTypes.SELECT
            }
        )
        res.json({ calificaciones })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerCalificacionEstadia = async (req, res) => {

    const { id_alumno, cuatrimestre } = req.params

    try {
        let calificaciones = await db.query(
            `SELECT m.nombre as materia, c.primero_inter as primero, c.segundo_inter as segundo, c.tercero_inter as tercero
             FROM grupos_materias as gm, estadias as c, materias as m, grupos as g, alumnos_grupos as ag, periodos as p
             WHERE g.id_periodo = p.id_periodo
             AND ag.id_alumno = :id_alumno
             AND ag.id_grupo = g.id_grupo
             AND g.id_grupo = gm.id_grupo
             AND m.id_materia = gm.id_materia
             AND c.id_g_m = gm.id_g_m
             AND gm.id_grupo = g.id_grupo
             AND c.id_alumno = :id_alumno
             AND g.cuatrimestre = :cuatrimestre
            `,
            {
                replacements: { id_alumno, cuatrimestre },
                type: QueryTypes.SELECT
            }
        )
        res.json({ calificaciones })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerPeriodos = async (req, res) => {

    const { id_alumno } = req.params

    try {
        let periodos = await db.query(
            `SELECT p.id_periodo, p.fecha_inicio, p.fecha_fin, g.cuatrimestre
             FROM grupos as g
             join periodos as p
             ON g.id_periodo = p.id_periodo
             JOIN alumnos_grupos as ag 
             ON ag.id_grupo = g.id_grupo
             WHERE ag.id_alumno = :id_alumno
             ORDER BY p.id_periodo DESC LIMIT 6
            `,
            {
                replacements: { id_alumno },
                type: QueryTypes.SELECT
            }
        )
        res.json({ periodos })
    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}