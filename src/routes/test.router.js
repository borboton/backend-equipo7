const express = require('express')
const testRouter = express.Router()



testRouter.get('/',(req,res)=>{
    res.json({'message':'this is a test!'})
})


module.exports = testRouter