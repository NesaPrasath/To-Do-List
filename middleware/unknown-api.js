const unknownapi=(req,res)=>
{
    res.status(404).send("Unkown api")
}
module.exports=unknownapi