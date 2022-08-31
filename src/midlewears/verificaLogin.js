const knex = require('../DB/connection');
const jwt = require('jsonwebtoken');


const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, process.env.DB_PSSWHASH);

        const usuarioEncontrado = await knex('usuarios').where({ id }).first()

        if (!usuarioEncontrado) {
            return res.status(404).json('Usuario não encontrado');
        }
        const { senha: _, ...user } = usuarioEncontrado

        req.usuario = user;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificaLogin