const knex = require('../../DB/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const yup = require('yup')

const obterPerfil = async (req, res) => {
    const { nome_da_loja } = req.body
    const loginSchema = yup.object().shape({
        nome_da_loja: yup.string().required('adicione um parametro de busca')
    })
    try {
        let usuario = {}
        usuario = await knex('usuarios').where({ nome_da_loja: nome_da_loja })
        return res.json(usuario)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}
module.exports = obterPerfil