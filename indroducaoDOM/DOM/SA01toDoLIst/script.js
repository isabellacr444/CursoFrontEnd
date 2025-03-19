//construir a aplicacao do Todolist ->DOM(HTML/CSS)
//style do body
document.body.style.backgroundColor ="lightgray";
document.body.style.backgroundColor.margin ="0";
document.body.style.textAlign ="center";
document.body.style.fonteFamily ="Arial";

//style do container 
let container =document.querySelector(".container");//variavel simples
container.style.width ="50%";
container.style.backgroundColor ="aliceblue";
container.style.margin ="auto";
container.style.padding ="30px";
container.style.borderRadius ="15px"; 

//lógica do funcionamento da lista de tarefas

let tarefa =document.getElementById("tarefa");//pega as informaçoes do input tarefa
document.getElementById("btnEnviar").addEventListener(
    "click", criartarefa
);//ouvinte para o botão

function criartarefa(){ //açao apos apertar o botao
    let texto = tarefa.value.trim();
   if(texto ==="") return; //interrompe a funtion
   //criar item da lista
   let li =document.createElement("li");
   li.innerHTML =texto+'<button class="btnRemover" onclick="removerTarefa(this)">Remover</button>';
   //adicionar tarefa na lista de tarefas
   let ul =document.getElementById("listaTarefas");
   ul.appendChild(li); 
   tarefa.value = "";
}

//botão Remover -
function removerTarefa(botao){
    botao.parentElement.remove();
}
