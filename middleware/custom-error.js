class Customerror extends Error
{
    constructor(message,status)
    {
        super(message)
        this.statusCode=status
    }
}

const createError=(msg,statuscode)=>
{
    return new Customerror(msg,statuscode)
}
module.exports={Customerror,createError}