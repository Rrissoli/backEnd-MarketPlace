const knex = require("../../DB/connection")

const listarProdutosId = async (req, res) => {
    const { id } = req.params

    try {
        const listaObjetos = await knex('produtos').select('*').where({ id: id })
        return res.status(200).json(listaObjetos)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = { listarProdutosId }