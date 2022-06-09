/*

 ######   ###
 # ## #    ##
   ##      ##      ######    ####    ##   ##
   ##      #####    ##  ##  ##  ##   ## # ##
   ##      ##  ##   ##      ##  ##   #######
   ##      ##  ##   ##      ##  ##   #######
  ####    ###  ##  ####      ####     ## ##



*/
function verificaPalindromo(string){
    if(!string)return 'String inválida';
    
    
    return string === string.split('').reverse().join('');
     

}
document.getElementById("demo").textContent = verificaPalindromo('cat'); 

function verificaPalindromo1(string){
    if(!string) throw "String inválida";
    

    return string === string.split('').reverse().join('');
}
document.getElementById("demo1").textContent = verificaPalindromo1('cat');

/*Try...catch*/

function verificaPalindromo2(string){
    if(!string) throw "String Inválida";
    
    return string === string.split('').reverse().join('');
}

function tryCatchExemplo1(string){
    try {
        verificaPalindromo2(string)
    }
    catch(e){
        console.log(e)
    }
}
document.getElementById('demo2').textContent = tryCatchExemplo('ovo');

/*exemple two*/
function verificaPalindromo3(string){
    if(!string) throw "String Inválida";
    
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo2(string){
    try {
        verificaPalindromo3(string)
    }
    catch(e){
        throw e;
    }
    finally{
        console.log('A string enviada foi: + string');
    }
}
document.getElementById('demo3').textContent = tryCatchExemplo2('');


/*Exemple w3schools*/
function myFunction(){
    const message = document.getElementById("p01");
    message.textContent = "";

    let x = document.getElementById("inpDemo").value;
    try {
        if(x == "") throw "Vazio";
        if(isNaN(x)) throw "Não é um número";
        x = Number(x);
        if(x < 5) throw "Valor baixo";
        if(x > 10) throw "Valor alto";
    }
    catch(err){
        message.textContent = "Entrada possui " + err;

    }
}
let btnTeste = document.getElementById("btnTeste");
btnTeste.addEventListener("click", myFunction);
