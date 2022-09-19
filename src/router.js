const express = require('express')
const router = express()
const cadastrarProduto = require('./controlers/produtos/cadastrarProduto')
const { deletarProdutos } = require('./controlers/produtos/deleteProduct')
const { listarProdutos } = require('./controlers/produtos/listarProdutos')
const { listarProdutosId } = require('./controlers/produtos/listarProdutosId')
const { listarProdutosUser } = require('./controlers/produtos/listarProdutosUser')
const { updateProdutos } = require('./controlers/produtos/updateProdutos')

const { cadastrarUsuario } = require('./controlers/usuarios/cadastro')
const { Login } = require('./controlers/usuarios/login')
const obterPerfil = require('./controlers/usuarios/obterPerfil')
const updatePerfil = require('./controlers/usuarios/updatePerfil')
const verificaLogin = require('./midlewears/verificaLogin')

//login de usuario
router.post('/login', Login)

//cadastro de usuario
router.post('/cadastrarUsuario', cadastrarUsuario)
//exibir todos os produtos
router.get('/produtos', listarProdutos)
//listar produto por id 
router.get('/produtos/:id', listarProdutosId)

// faz verificação de auth
router.use(verificaLogin)
//update produto por id 
router.put('/updateProduto/:id', updateProdutos)

router.post('/obterPerfil', obterPerfil)
router.post('/updateUser', updatePerfil)

//cadastrar produtos
router.post('/cadastrarProduto', cadastrarProduto)
//deletar produtos
router.delete('/deletarProdutos/:id', deletarProdutos)
//listar produtos do usuario
router.get('/listarProdutosUser', listarProdutosUser)

module.exports = router