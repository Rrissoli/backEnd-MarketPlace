const knex = require('../../DB/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const yup = require('yup')

const updatePerfil = async (req, res) => {
    const { nome_da_loja, email, senha } = req.body

    const loginSchema = yup.object().shape({
        nome_da_loja: yup.string().required('O nome da loja é Obrigatório'),
        email: yup.string().email('O email precisa ter um formato válido').required('O campo email é obrigatório'),
        senha: yup.string().required('O campo senha é obrigatório')
    })
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuario = {
            nome_da_loja,
            email,
            senha: senhaCriptografada
        }
        const usuarioAtualizado = await knex('usuarios').where({ email: email }).update(usuario)

        return res.status(200).json('usuario atualizado com sucesso')
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = updatePerfil