const knex = require("../../DB/connection")

const deletarProdutos = async (req, res) => {
    const { id } = req.params
    const { usuario } = req
    try {
        const objDeletado = await knex('produtos').where({ id: id }).delete()
        if (!objDeletado) return res.status(400).json('não foi possível deletar')

        return res.status(200).json(objDeletado)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = { deletarProdutos }