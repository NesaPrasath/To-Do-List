const control= (fnc)=>
{
    return async (req,res,next)=>
    {
        try
        {
           await fnc(req,res,next)
        }
        catch(err)
        {
            next(err)
        }
    }
}
module.exports=control