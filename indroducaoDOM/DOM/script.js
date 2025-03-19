//indrotucao ao estudo do DOM

//Selecionar e modificar Elementos

//getElementos =>variavel simples

let titulo =document.getElementById("titulo");//
console.log(titulo);//ver o elemento
titulo.innerText ="Outro Titulo";//Modificar o texto

//getElementos classes =>vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText ="Outro texto";
descricao[0].style.color ="blue";

//getElementsByTagName =>vetor
let p =document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontWeight ="bold";

//querySelector =>variavel simples
let paragrafo =document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize ="40px"

//querySelectorAll =>Vetor (array)
let descricaoAll =document.querySelectorAll(".descricao");
descricaoAll.forEach(element=> element.style.color="red");

//Lançamentos de Eventos(eventlistener)
//Chamandoo no botão
function mudarCorFundo(){
    let body =document.querySelector("body");
    body.style.backgroundColor="blue";
}
//adicionando o ouvinte
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);
function outraCorFundo(){
    
}

mkdir