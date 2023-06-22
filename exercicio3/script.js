const resposta = document.getElementById('resposta');
const lista = document.getElementById('lista')

function somar(){
    n1 = 2
    for (let i = 0; i <=10 ; i++){
        let soma = n1 + i

        resposta.innerHTML += `<br>${n1} + ${i} = ${soma} `
    }

}  

function listar(){
    
    for( let i = 1; i <= 5 ; i++){
        let item = document.createElement('li');
        lista.appendChild(item)
        item.innerHTML += `item ${i} <br>`
    }
    
}

function selecionou(){
    let checkbox = document.getElementsByName('opcoes');
    let selecionados = [];
    for( let i = 0; i< checkbox.length; i++){
        if(checkbox[i].checked){
            selecionados.push(checkbox[i].value);
        }
        if(checkbox[0].checked){
            alert`voce está otima`
        } else (checkbox[1].checked){
            alert`Vá almoçar, ta quentinho`
        }
    }
   
    
    }
    
