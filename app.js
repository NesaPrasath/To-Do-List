const express=require('express')
const app=express()
const task=require('./Router/task')
const connectDB=require('./db/connect')
const unknownapi = require('./middleware/unknown-api')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/',task)
app.use(unknownapi)
const start=async()=>
{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log('Database connected')
        app.listen(5050,console.log("Server Started...."))
    }
    catch(err)
    {
        console.log(err)
    }    
}
start()
