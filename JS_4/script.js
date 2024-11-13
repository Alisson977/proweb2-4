const btnverificar = document.querySelector("#btn-verificar")

btnverificar.addEventListener('click', ()=>{

    const numero = Number(document.querySelector("input").value)
    const resultado = document.querySelector("h2")

    if(numero % 2 == 0){
        resultado.innerText = `O número ${numero} é par`
    } else {
        resultado.innerText = `O número ${numero} é par`
    }
})