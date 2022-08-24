# API MARKET PLACE 

### Esta API criará o backend de uma aplicação de marketplace liver, como inspiração grandes empresas como mercado livre, shein , shope, etc.

*v0.1*

---

## TELA LOGIN *não necessario autenticação*

### -> POST (/login)

#### deverá ser feito um post do email e senha do usuário e ser retornado um token para validação que deve ser armazenado no localstorage

#### se caso o usuário não for correto ou email ou senha deverá ser enviado uma mensagem 404 ('email ou senha incorretos') : req == usuario e senha

---

## TELA DE CADASTRO

### -> POST (/cadastrar)*não necessario autenticação*

### deverá ser enviado ao banco de dados as informações do usuarios: Nome da loja, email, senha. Essas quais todas são NOT NULL, não nulas.

### Se acaso o usuário não completar todas as informações retornar uma mensagem de erro ('algumas informações faltando')

---

## TELA DE PRODUTOS  *não necessario autenticação*

## -> GET (/listar) 

### devera listar os produtos de qualquer vendedor , rolagem infinita 

## TELA PRODUTO ESPECÌFICO 

## -> GET (/listar/produto_id)


---

## CRUD DE PRODUTOS *necessário estar logado*

## POST -> (/cadastrarProduto)

### faz o envio de dados para a DB com as informações: usuario_id, título NOT NULL ,categoria_id, descrição do produto, preço NOT NULL, estoque, foto NOT NULL 

## GET -> (/usuarioProdutos)

### listar todos os produtos já cadastrados pelo usuario 

## PUT -> (/updateProduto/produto_id)

### fazer update do produto selecionado
 
