const knex = require("../../DB/connection")
const { all } = require("../../router")

const listarProdutos = async (req, res) => {
    try {
        const allProducts = await knex('produtos').select('*')
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = { listarProdutos }