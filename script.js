var p = document.getElementById('pergunta')  //Pergunta principal: 'você precisa disso?'

var ok = document.getElementById('botao')  //Botão de 'OK'
ok.addEventListener('click',clicar)  //Função clicar do botão 'OK'

var nao = document.getElementById('nao')  //Variável do input "não"
var sim = document.getElementById('sim')  //Variável do input "sim"

var count = 0  //Incio da contagem

function clicar (){

        if(sim.checked & count === 0){
            p.innerHTML = 'Você pode substituir?'
            count+=1  //Auto-atribuição de soma para continuação da árvore
    
        }else if(nao.checked & count === 0){
            p.innerHTML = '<b>Poupe seu dinheiro</b>'
            p.style.color = 'red'
                setTimeout(function(){
                    window.location.reload(1);
                }, 1000);  //Encerra o programa atualizando a página

        }else if(sim.checked & count === 1){
            p.innerHTML = '<b>Então não compre</b>'
            p.style.color = 'red'
                setTimeout(function(){
                    window.location.reload(1);
                }, 1000);  //Encerra

        }else if(nao.checked & count === 1){
            p.innerHTML = 'Pode pedir emprestado?'
            count+=1  //Auto-atribuição de soma para continuação das próximas perguntas

        }else if(sim.checked & count === 2){
            p.innerHTML = '<b>Então peça a alguém</b>'
            p.style.color = 'green'
                setTimeout(function(){
                    window.location.reload(1);
                }, 1000);  //Encerra

        }else if(nao.checked & count === 2){
            p.innerHTML = '<b>Compre</b>'
            p.style.color = 'green'
                setTimeout(function(){
                    window.location.reload(1);
                }, 1000);  //Encerra
        
        }else{
            /*Faça nada*/  
        }
        
}