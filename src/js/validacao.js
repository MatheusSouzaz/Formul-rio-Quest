let campos = document.querySelectorAll(".campo")





campos.forEach(input =>{
    input.addEventListener('input', function(event){

        let input = event.target

        let tamanhoConteudo = event.target.value.length
        

        if(tamanhoConteudo > 0){

            input.classList.add("preenchido")
        }
        else{
            input.classList.remove("preenchido")
        }
    })
})

let btnEnviar = document.querySelector(".btn-enviar")

btnEnviar.addEventListener("click", function(){

 const camposObrigatorios = document.querySelectorAll(".campo-vazio")




    campos.forEach(input =>{

        let conteudoInput = input.value

        if(conteudoInput === ""){
            input.classList.add("vazio")
    
        }
        else{
            input.classList.remove("vazio")
            
        }})
let classesCampo1 = campos[0].classList
let classesCampo2 = campos[1].classList
let classesCampo3 = campos[2].classList
let classesCampo4 = campos[3].classList


if(classesCampo1[1] === "vazio"){
    camposObrigatorios[0].classList.add("verdade")
}else{
    camposObrigatorios[0].classList.remove("verdade")
}

if(classesCampo2[1] === "vazio"){
    camposObrigatorios[1].classList.add("verdade")
}else{
    camposObrigatorios[1].classList.remove("verdade")
}
if(classesCampo3[1] === "vazio"){
    camposObrigatorios[2].classList.add("verdade")
}else{
    camposObrigatorios[2].classList.remove("verdade")
}
if(classesCampo4[1] === "vazio"){
    camposObrigatorios[3].classList.add("verdade")
}else{
    camposObrigatorios[3].classList.remove("verdade")
}





})




