//Dom ->Jogo Quiz Interativo

let perguntas =[];//vetor para armazenamento das perguntas
let perguntaAtual =0;//indice para indentificação da pergunta atual

//Dom ->elementos

let perguntaElement =document.getElementById("pergunta");
let opcaoElement = document.getElementById("opcoes");
let proximaElement =document.getElementById("proxima");
let respostaElement =document.getElementById("resposta");

//fetch -> pegar as perguntas do arquivo Json
fetch("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();//funcao para carregar no html
})
.catch(error => console.error("Erro ao carregar as Perguntas:"+error)); //tratamento de erros


//DOM -> funções
function carregarPerguntas(){
    respostaElement.innerText ="";
    proximaElement.disabled = true;

    //perguntas foram carregadas
    if(perguntaAtual>=perguntas.length){//idendificar se não cheguei ao final
        if(perguntaAtual==0){
            perguntaElement.innerText ="Erro ao carregar as perguntas";
            return;
        }
     perguntaElement.innerText ="Quiz Finalizado!";
     opcaoElement.innerHTML ="";
     proximaElement.style.display="none";
     return;
    }
    //caso tudo de certo -> perguntas carregadas
    //mostrar as perguntas da tela 
    let p = perguntas[perguntaAtual];
    perguntaElement.innerText = p.pergunta;//
    opcaoElement.innerHTML ="";
    //preencher as opçoes
    p.opcoes.array.forEach(opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerText = opcao;//atribuir texto ao botao
        btnOpcao.classList.add("opcao");//atribuir classe ao botão
       btnOpcao.addEventListener("click",()=> verificarResposta(opcao,btnOpcao));
       opcoesElement.appendChild(btnOpcao);
    });
}
//função para verificar a resposta
function verificarResposta(opcao,btnOpcao){
    const respostaCorreta =perguntas[perguntaAtual].resposta;
    //verificar 
    if(opcao===respostaCorreta){
        btnOpcao.classList.add("correta");//adicionando a classe correta ao btn
       respostaElement.innerText ="Acertou!!!";
    }else{
        btnOpcao.classList.add("errada");
        respostaElement.innerText ="Errou!! A Resposta Correta é"+ respostaCorreta;
    }
    //vou desabilitar botões de resposta
    document.querySelectorAll(".opcao").forEach(btn =>btn.disabled =true);
   proximaElement.disabled = false;

   proximaElement.addEventListener("click",()=>{
    perguntaAtual++;
    carregarPerguntas();
   })
}
