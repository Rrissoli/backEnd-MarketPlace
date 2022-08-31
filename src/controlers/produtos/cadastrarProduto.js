const yup = require('yup')
const knex = require('../../DB/connection')
const supabase = require('../../DB/supabase')
const jwt = require('jsonwebtoken');

const cadastrarProduto = async (req, res) => {
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
        const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('.', ',')

        const bufer = Buffer.from(imagem, 'base64')


        const categoria_id = await knex('categoria').where({ nome: categoria })

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



        const produtoAceito = await knex('produtos').insert({
            nome,
            estoque,
            preco: precoFormatado,
            usuario_id: usuario.id,
            categoria: categoria_id[0].id,
            descricao,
            nome_imagem: codeImagem,
            imagem: publicURL
        })

        if (!produtoAceito) {
            return res.json('não foi possível cadastrar este produto')
        }
        return res.status(200).json('O produto foi cadastrado com sucesso.');
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = cadastrarProduto