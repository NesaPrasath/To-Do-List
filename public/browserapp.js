const FormDom=document.getElementById('Form')
const InputDom=document.querySelector('.text-form')
const AlertDom=document.querySelector('.Alert')
const ShowTaskDOM=document.querySelector('.all-task')
//-----------ShowAll--------------------------------
const showtask=async ()=>
{
    try
    {
        const{data:{task}}=await axios.get('/api/v1/')
        if(task.length<1)
        {
            ShowTaskDOM.innerHTML=`<h5>There is no task to display</h51>` 
            return 
        }
        const alltask=task.map(task=>{
            const {completed,_id:TaskId,name}=task
            return`<div class="get-task ${completed && 'task-completed'}" ><h5><span><i class="far fa-check-circle greenGlow"></i></span>${name}</h5>
            <div class="task-main"><a class="edit" href="edit-task.html?id=${TaskId}"><i class="fas fa-edit greencolor"></i></a><button type="button" class="delete" data-id="${TaskId}"><i class="fas fa-trash redcolor"></i></button></div></div>`
        }).join('')
        ShowTaskDOM.innerHTML=alltask
    }
    catch(err)
    {
        console.log(err)
        ShowTaskDOM.innerHTML=`<h5 style="color: tomato;">Found an Error,Please try again later!!!</h5>`
    }
}
showtask()
// ----------FormAction--------------------------------
FormDom.addEventListener('submit',async (e)=>
{
    e.preventDefault()
    const name=InputDom.value
    console.log(name)
    if(name==="")
        {
            AlertDom.style.color="red"
            AlertDom.innerHTML=`<h5>Task cannot be null</h5>`
            setTimeout(()=>
            {
                AlertDom.style.display="none"
            },3000
            )
        }
    else{
        try{
            await axios.post('/api/v1/',{name})
            AlertDom.style.color="green"
            AlertDom.innerHTML=`<h5>Added Successfully</h5>`
            setTimeout(()=>
            {
                AlertDom.style.display=`none`
                InputDom.value=``
            },3000)
        }
        catch(error)
        {
            AlertDom.style.color="red"
            AlertDom.innerHTML=`<h5>error occured</h5>`
        }
    }
    showtask()
})
//----------------------Delete Action----------------------
ShowTaskDOM.addEventListener('click',async (e)=>
{
    const el=e.target
    if(el.parentElement.classList.contains('delete'))
    {
        const id= el.parentElement.dataset.id
        try{
            await axios.delete(`/api/v1/${id}`)
            showtask()
        }
        catch(err)
        {
            console.log(err)
        }
    }
})
