const express = require('express');
const cors = require('cors')
const logger = require('./config/logger')
const app = express()

app.use(cors())
app.options('*',cors())

const testRouter = require('./routes/test.router')

app.use(testRouter)
const PORT = process.env.PORT | 8080
app.listen(PORT,function(){
    logger.info(`Server Listening on ${PORT}`)

})
