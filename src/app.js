require('dotenv').config()
const express = require('express')
const router = require('./router')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json({
    limit: '5mb'
}))
app.use(router)

app.listen(process.env.PORT || 4000)