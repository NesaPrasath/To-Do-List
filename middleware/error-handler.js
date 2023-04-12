const {Customerror}=require('./custom-error')
const errorhandler=(err,req,res,next)=>
{
    if(err instanceof Customerror)
    {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:"something went wrong"})
}

module.exports=errorhandler