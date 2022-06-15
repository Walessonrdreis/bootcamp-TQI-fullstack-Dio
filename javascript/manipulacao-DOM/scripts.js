const meuElemento = document.getElementById("meu-elemento");
meuElemento.classList.add("novo-estilo");
//Adiciona a classe "meu-estilo"
meuElemento.classList.remove("classe");
//Remove a classe "classe"
meuElemento.classList.toggle("dark-mode");
//Adiciona a classe "dark-mode" caso ela não faça parte
//da lista remove ela caso faça

// Acessando diretamente o css de elemento
document.getElementsByTagName("p").style.color = "blue";

//Event Listener 
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);


//exemplo w3schools 
function myFunction() {
    document.getElementById("myDIV").classList.toggle("myStyle");
  }