const Task=require('../models/Task')
const control=require('../middleware/control-fnc')
const {createError}=require('../middleware/custom-error')

const getAllTask=control(async (req,res)=>
{
    const task=await Task.find({})
    res.status(201).json({task})   
})
const createTask=control(async (req,res)=>
{
    const task=await Task.create(req.body) 
    res.status(201).json({task})
})

const getTask=control(async (req,res,next)=>
{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task)
        {
            return next(createError(`no task with ${taskID}`),404)
        }
        res.status(201).json({task})
})

const updateTask=control(async (req,res)=>
{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({ _id: taskID},req.body,{
        new:true,runValidators:true
        })
        if(!task)
        {
            return next(createError(`no task with ${taskID}`),404)
        }
        res.status(201).json({task})
})

const deleteTask=control(async (req,res)=>
{
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task)
        {
            return next(createError(`no task with ${taskID}`),404)
        }
        res.status(201).json({task})
})
module.exports={
    getAllTask,createTask,getTask,updateTask,deleteTask
} 
