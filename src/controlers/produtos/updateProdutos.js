const knex = require("../../DB/connection")
const supabase = require('../../DB/supabase')
const yup = require('yup')
const updateProdutos = async (req, res) => {
    const { id } = req.params
    const { nome,
        estoque,
        preco,
        categoria,
        descricao, imagem, usuario_id } = req.body
    const { usuario } = req

    const loginSchema = yup.object().shape({
        nome: yup.string().required('precisamos de um nome '),
        estoque: yup.number().required('precisamos NUMEROS do estoque'),
        preco: yup.number().required('precisamos do valor do produto'),
    })

    try {
        const bufer = Buffer.from(imagem, 'base64')


        const categoria_id = await knex('categoria').where({ nome: categoria }).first()

        const codeImagem = `${new Date().getTime()}`;


        const { data, error } = await supabase
            .storage
            .from('produtos')
            .upload(codeImagem, bufer)
        if (error) {
            return res.json(error.message)
        }

        const { publicURL, error: erroUrl } = await supabase
            .storage
            .from('produtos')
            .getPublicUrl(codeImagem)
        if (erroUrl) {
            return res.json(erroUrl.message)
        }

        const usuarioAtualizado = await knex('produtos').where({ id: id }).update({
            nome,
            estoque,
            preco,
            usuario_id: usuario.id,
            categoria: categoria_id.id,
            descricao,
            nome_imagem: codeImagem,
            imagem: publicURL
        })

        return res.status(200).json('produto atualizado com sucesso')
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = { updateProdutos }