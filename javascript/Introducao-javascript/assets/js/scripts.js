var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement(){
   
   if (currentNumber += 0){
currentNumber = currentNumber - 1;
   currentNumberWrapper.innerHTML = currentNumber;
   }else{
      currentNumer=0;
   }
   
}
var subtrair = document.getElementById("subtrair");
   subtrair.addEventListener("click", decrement
   );

function increment(){
   currentNumber = currentNumber + 1;
   currentNumberWrapper.innerHTML = currentNumber;
}
var adcionar = document.getElementById("adcionar");
   adcionar.addEventListener("click", increment);

