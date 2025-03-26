//Dom ->Jogo Quiz Interativo

let perguntas =[];
let proximaPergunta =0;

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

//DOM -> funções
function carregarPerguntas(){}


