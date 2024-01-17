const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.get('/',(req,res)=>{
  console.log('hello world')
})

app.listen(process.env.PORT)