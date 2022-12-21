const express=require('express')
const app=express()
const task=require('./Router/task')
const connectDB=require('./db/connect')

app.use(express.json())

app.use('/api/v1/',task)
const start=async()=>
{
    try{
        await connectDB()
        console.log('Database connected')
        app.listen(5050,console.log("Server Started...."))
    }
    catch(err)
    {
        console.log(err)
    }    
}
start()
