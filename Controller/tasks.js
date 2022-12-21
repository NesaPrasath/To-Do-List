const getAllTask=(req,res)=>
{
    res.send("All Task control")
}

const createTask=(req,res)=>
{
    res.json(req.body)
}

const getTask=(req,res)=>
{
    res.json({id:req.params.id})
}

const updateTask=(req,res)=>
{
    res.send("Update Task control")
}

const deleteTask=(req,res)=>
{
    res.send("delete Task control")
}
module.exports={
    getAllTask,createTask,getTask,updateTask,deleteTask
} 
