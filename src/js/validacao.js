let camposFormulario = document.querySelectorAll(".campo")
let botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click',function(e){
e.preventDefault()

camposFormulario.forEach((input)=>{
    if(input.value){
        input.classList.add('preenchido')
        input.classList.remove('vazio')
        input.nextElementSibling.classList.remove('mostrar')
    }else{
        input.classList.remove('preenchido')
        input.classList.add('vazio')
        input.nextElementSibling.classList.add('mostrar')
    }
})
})




