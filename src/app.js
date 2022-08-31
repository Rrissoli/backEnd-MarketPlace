require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
app.use(express.json({
    limit: '5mb'
}))
app.use(cors())
app.use(router)

app.listen(process.env.PORT || 3000)