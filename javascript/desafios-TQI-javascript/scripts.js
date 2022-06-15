

function soma(number1,number2){
    var number1 = document.getElementById("valor1").value; 
    var number2 = document.getElementById("valor2").value;
   // var soma = (parseInt(number1)) + (parseInt(number2));
    var contador = 1 ;
    for (contador; contador <= number2; contador++){ 
        let soma = ((parseInt(number1))+ parseInt(number2))* contador / 2;
        document.getElementById("resultado").innerHTML = soma +"<br>";
    }

   
    

 

}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click",soma);



/*
function soma(A,B){
  
  const A = parseInt(gets());
  const B = parseInt(gets());
  
  
  const contador = 1 ;
  for(contador; contador <= B; contador++){
    const total = (A+ B) * contador /2;
    print(total);
  }
 
}

 print(soma(A,B));

 let A = parseInt(gets());
let B = parseInt(gets());
let total;
for(let contador = 1; contador <= B; contador++){
    total = (A + B) * contador /2;
    
  }
  print(total);
*/
