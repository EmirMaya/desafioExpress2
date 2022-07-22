let prodForm = document.getElementById('prodForm');

const handleSumbit = (evt,form,route) =>{
    evt.preventDefault();
    let formData=new FormData(form);
    let obj = {};
    formData.forEach((value,key)=>obj[key]=value);
    fetch(route,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(json=>console.log(json));
}

prodForm.addEventListener('submit',(e)=>handleSumbit(e,e.target,'/api/productos'))