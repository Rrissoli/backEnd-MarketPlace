const knex = require('../../DB/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const yup = require('yup')
const Login = async (req, res) => {
    const { email, senha } = req.body
    const loginSchema = yup.object().shape({
        email: yup.string().email('O email precisa ter um formato válido').required('O campo email é obrigatório'),
        senha: yup.string().required('O campo senha é obrigatório')
    })
    try {
       
        const usuario = await knex("usuarios").where({ email: email }).first()
      
        if (!usuario) {
            return res.json('O usuário não foi encontrado')
        }
        const senhaCorrreta = await bcrypt.compare(senha, usuario.senha)
        
        if (!senhaCorrreta) {
            return res.status(401).json('Email ou senha não conferem')
        }
        const senhaHash = process.env.DB_PSSWHASH
        const token = jwt.sign({ id: usuario.id }, senhaHash, { expiresIn: '8h' })
        const { senha: _, ...dadosUsuario } = usuario;
        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = {
    Login
}