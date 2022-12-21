const mongoose=require('mongoose')
mongoose.set('strictQuery',true)

const connectstr='mongodb+srv://Nesaprasath20:csonetha@taskmanager.zswkm4x.mongodb.net/ProjectTask?retryWrites=true&w=majority'

const connectDB=(url)=>
{
    return mongoose.connect(connectstr)
}
module.exports=connectDB
