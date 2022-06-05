


function returnCompar(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let returnCalc = document.getElementById("returnCalc");

    let number1 = Number(num1.value);
    let number2 = Number(num2.value);

    
    if (number1 === number2){
        document.getElementById("returnCalc").textContent = "Os números "+number1 + " e " + number2 + " São Iguais.";
    }else{
        returnCalc.textContent= "Os números "+number1 + " e " + number2 + " Não são Iguais";
    }
   
    }
   
    function somaTeste(){
        let num1 = document.getElementById("num1");
        let num2 = document.getElementById("num2");
        let returnCalc = document.getElementById("returnCalc");
    
        let number1 = Number(num1.value);
        let number2 = Number(num2.value);
    
        let soma = number1 + number2;
        if(soma > 10 && soma < 20){
            returnCalc.textContent = `A soma entre ${number1} e ${number2} = ${soma}, é maior que 10 e menor que 20 `;
        }else{
            returnCalc.textContent = `A soma entre ${number1} e ${number2} = ${soma} é menor que 10 e menor que 20 `;
        }
    }
    
    function comparaNumber(){
        let returnCompar = returnCompar();
        let somaTeste = somaTest();
        let returnCalc = document.getElementById("returnCalc");
          return returnCalc.textContent = `${returnCompar} e ${somaTeste}`;
    }

var calcular = document.getElementById("calcular");
calcular.addEventListener("click", comparaNumber);

/*function validaNumero(num){
    if (!num) return “Envie um número válido!”;
  
    return num;
}

validaNumero();*/