const knex = require("../../DB/connection")

const listarProdutosUser = async (req, res) => {
    const { usuario } = req
    const { usuario_id } = req.body
    try {

        const listaObjetos = await knex('produtos').select('*').where({ usuario_id: usuario.id })
        return res.status(200).json(listaObjetos)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = { listarProdutosUser }