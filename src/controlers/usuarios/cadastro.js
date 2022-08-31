const yup = require('yup')
const knex = require('../../DB/connection')
const bcrypt = require('bcrypt');


const cadastrarUsuario = async (req, res) => {
    const { nome_da_loja, email, senha } = req.body
    const loginSchema = yup.object().shape({
        nome_da_loja: yup.string().required('O nome da loja é Obrigatório'),
        email: yup.string().email('O email precisa ter um formato válido').required('O campo email é obrigatório'),
        senha: yup.string().required('O campo senha é obrigatório')
    })

    try {
        await loginSchema.validate(req.body)
        const emailExiste = await knex("usuarios").where({ email: email })
        if (emailExiste.length > 0) {
            return res.json("email ja cadastrado")
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuarioCadastrado = {
            email, senha: senhaCriptografada, nome_da_loja
        }
        await knex('usuarios').insert(usuarioCadastrado)
        return res.json('usuario cadastrado')
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports = { cadastrarUsuario }