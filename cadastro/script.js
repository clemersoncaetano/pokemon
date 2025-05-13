import { modal } from "../modal.js"

 function fazerCadastro() {
    const form = document.querySelector("form")
    form.addEventListener("submit",async (e)=>{
        e.preventDefault()
        const email = document.getElementById("email")
        const pass = document.getElementById("pass")
        const user = { 
            email:email.value,
            password:pass.value
        }
        const res = await fetch(`http://localhost:3001/users`,{
            method:"POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json; charset=utf-8"
            }
        })
        if(res.status === 201){
            location.href  = "/login"
        }else {
            modal("Algo deu errado, tente novamente")
        }
    })
}
fazerCadastro()