const FormDom=document.getElementById('Form')
const InputDom=document.querySelector('.text-form')
const AlertDom=document.querySelector('.Alert')
//-----------ShowAll--------------------------------
// ----------FormAction--------------------------------
FormDom.addEventListener('submit',async (e)=>
{
    e.preventDefault()
    const name=InputDom.value
    console.log(name)
    try{
        await axios.post('/login',{name})
        AlertDom.style.color="green"
        AlertDom.innerHTML=`<h5>Added Successfully</h5>`
    }
    catch(error)
    {
        AlertDom.style.color="red"
        AlertDom.innerHTML=`<h5>error occured</h5>`
    }
})