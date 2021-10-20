const express= require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const router=require('./Routes/routing')
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use('/',router)



app.listen(4000)
console.log('Server started at 4000')

