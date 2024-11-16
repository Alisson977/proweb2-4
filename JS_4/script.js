const btnverificar = document.querySelector("#btn-verificar")
const btnvoltar = document.querySelector("#btn-voltar")
const div2 = document.querySelector("#resultado")
const div1 = document.querySelector("#main")

btnverificar.addEventListener('click', ()=>{

    const numero = Number(document.querySelector("input").value)
    const resultado = document.querySelector("h2")

    if(numero == ""){
        alert("Por favor digite um número")
    } else { 
        div1.style.display = 'none';
        div2.style.display = 'block';
        if(numero % 2 == 0){
            resultado.innerText = `O número ${numero} é par`
        } else {
            resultado.innerText = `O número ${numero} é impar`
        }
    }
})

btnvoltar.addEventListener('click', ()=> {
    div1.style.display = 'block';
    div2.style.display = 'none';
})
