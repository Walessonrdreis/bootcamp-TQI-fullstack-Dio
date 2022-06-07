//função autoinvocável 
//IIFE Uma função 
/*
 #######
  ##   #
  ## #    ##  ##   #####     ####     ####     ####     #####
  ####    ##  ##   ##  ##   ##  ##   ##  ##   ##  ##   ##
  ## #    ##  ##   ##  ##   ##       ##  ##   ######    #####
  ##      ##  ##   ##  ##   ##  ##   ##  ##   ##            ##
 ####      ######  ##  ##    ####     ####     #####   ######


*/




/*
//Callbacks
/*
   ####     ##     ####     ####     ######     ##       ####   ###  ##   #####
  ##  ##   ####     ##       ##       ##  ##   ####     ##  ##   ##  ##  ##   ##
 ##       ##  ##    ##       ##       ##  ##  ##  ##   ##        ## ##   #
 ##       ##  ##    ##       ##       #####   ##  ##   ##        ####     #####
 ##       ######    ##   #   ##   #   ##  ##  ######   ##        ## ##        ##
  ##  ##  ##  ##    ##  ##   ##  ##   ##  ##  ##  ##    ##  ##   ##  ##  ##   ##
   ####   ##  ##   #######  #######  ######   ##  ##     ####   ###  ##   #####


*/
/*
const calc = function(operacao,num1,num2){
  return operacao(num1,num2);
}
const soma=function(num1,num2){
  return num1+num2;
}
const sub=function(num1,num2){
  return num1 num2;
}
const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);
console.log(resultSub);// -1
console.log(resultSoma);//3

// uma função passada para outra
function exponencial(array,num=1){
      const result=[];
     for(let i=0;i<array.length;i++){
        result.push(array[i]** num);
     }
      return result;
    }
    exponencial([1,2,3,4])
    //[1,2,3,4]
    exponencial([1,2,3,4],4)
    //[1,8,27,64]


    //encontrar o maior número enviado nos argumentos da função
    //fazendo um loop entre todos os arguments
    function findMax(){
      let max = -Infinity;
     for(let i=0; i <arguments.length; i++){
        if(arguments[i]>max){
          max=arguments[i];
       }
     }
                  
      return max;
   }   
   
   //Spread
   /*
  #####                                          ###
 ##   ##                                          ##
 #        ######   ######    ####     ####        ##
  #####    ##  ##   ##  ##  ##  ##       ##    #####
      ##   ##  ##   ##      ######    #####   ##  ##
 ##   ##   #####    ##      ##       ##  ##   ##  ##
  #####    ##      ####      #####    #####    ######
          ####

   */
  /*
   function sum(x,y,z){
  return x + y + Z;
}
const numbers=[1,2,3];
console.log(sum(... numbers));

//Rest
/*
 ######   #######   #####   ######
  ##  ##   ##   #  ##   ##  # ## #
  ##  ##   ## #    #          ##
  #####    ####     #####     ##
  ## ##    ## #         ##    ##
  ##  ##   ##   #  ##   ##    ##
 #### ##  #######   #####    ####


*/
/*
function confereTamanho(... args){
 console.log(args.length);
}
confereTamanho()//0
confereTamanho(1,2)//2
confereTamanho(3,4,5)//3

//object Destructuring 
const user={
  td:42,
 displayName:'jdoe',
  fullName:{
    firstName:'John',
    lastName:'Doe'
};
function userId({id}){
  return id;
}
function getFullName({fullName:(firstName:first,lastName:last}}){
  return $(first)$(last)';
userId(user)
// 42
getFullName(user)
// John Doe
 }

 // if/else

 /*
  ####    #######                    #######  ####      #####   #######
   ##      ##   #                     ##   #   ##      ##   ##   ##   #
   ##      ## #                       ## #     ##      #         ## #
   ##      ####                       ####     ##       #####    ####
   ##      ## #                       ## #     ##   #       ##   ## #
   ##      ##                         ##   #   ##  ##  ##   ##   ##   #
  ####    ####                       #######  #######   #####   ######
 */
/*
 function numeroPositivo(num){
  let resultado;
  if(num<0){
    resultado=false;
  }else{
    resultado=true;
 }
  return resultado;
}
numeroPositivo(2)
// true
numeroPositivo(-9)
// false

////
function numeroPositivo(num){
 let resultado;
  if(num<0){
    resultado=false;
 }else{
    resultado=true;
 }
  return resultado;
}
numeroPositivo(2)
// true
numeroPositivo(-9)
// false
////boas práticas
function numeroPositivo(num){
  let resultado;
  const ehNegativo=num<0;
  if(ehNegativo){
    resultado=false;
  }else{
    resultado=true;
 }
  return resultado;
}
///
function numeroPositivo(num){
 const ehNegativo=num<0;
 if(ehNegativo){
    return false;
 }
  return true;
}
/// if/else aninhados


function numeroPositivo(num){
const ehNegativo=num<0;
const maiorQueDez=num>10;>

if(ehNegativo){
return "Esse número é negativo!";
}else if(!ehNegativo && maiorQueDez){
return "Esse número é positivo e maior que 10!"
}
return "Esse número é positivo!";
}

///

/*        

  #####   ##   ##   ####    ######     ####   ##   ##
 ##   ##  ##   ##    ##     # ## #    ##  ##  ##   ##
 #        ##   ##    ##       ##     ##       ##   ##
  #####   ## # ##    ##       ##     ##       #######
      ##  #######    ##       ##     ##       ##   ##
 ##   ##  ### ###    ##       ##      ##  ##  ##   ##
  #####   ##   ##   ####     ####      ####   ##   ##

                     ####     ##      #####   #######
      ##            ##  ##   ####    ##   ##   ##   #
     ##            ##       ##  ##   #         ## #
    ##             ##       ##  ##    #####    ####
   ##              ##       ######        ##   ## #
  ##                ##  ##  ##  ##   ##   ##   ##   #
 ##                  ####   ##  ##    #####   #######


*/

/*

   function getAnimal(id){
  switch(id){
    case1:
      return"cão";
    case2:
      return"gato";
    case3:
      return"pássaro";
    default:
      return"peixe";
}
getAnimal(1)// cão
getAnimal(4)// peixe
getAnimal("1")// peixe / entende que é algo diferente por isso retorna o valor default 
 }
 ///
 //FOR
/*
 #######   #####   ######
  ##   #  ##   ##   ##  ##
  ## #    ##   ##   ##  ##
  ####    ##   ##   #####
  ## #    ##   ##   ## ##
  ##      ##   ##   ##  ##
 ####      #####   #### ##


*/
/*
 function multiplicaPorDois(arr){
  let multiplicados=[];
  for(let i=0;i<arr.length;i++){
   multiplicados.push(arr[i]*2);
 }
  return multiplicados;
}
const meusNumeros=[2,33,456,356,40];
multiplicaPorDois(meusNumeros);
//[4,66,912,712,80]

///


   
   */
    /*
#######                                                ####
  ##   #                                                 ##
  ## #     ####    ######                                ##     #####
  ####    ##  ##    ##  ##                               ##     ##  ##
  ## #    ##  ##    ##                                   ##     ##  ##
  ##      ##  ##    ##        ##       ##       ##       ##     ##  ##
 ####      ####    ####       ##       ##       ##      ####    ##  ##


    /*
    InExemplo(obj){function for
  for(prop in obj){
  console.log(prop);
  }
  }
  const meuObjeto={
  nome:"João",
  idade:"20",
  cidade:"Salvador"
  }
  for InExemplo(meuObjeto);
  // nome
  // idade
  // cidadE
    */
   /*
  InExemplo(obj){function for
    for(prop in obj){
    console.log(obj[prop]);
    }
    }
    const meuObjeto={
    nome:"João",
    idade:"20",
    cidade:"Salvador"
    }
    for InExemplo(meuObjeto);
    // João
    V/20
    // Salvador
   /*
   /*

 #######                                                #####     ###
  ##   #                                               ##   ##   ## ##
  ## #     ####    ######                              ##   ##    #
  ####    ##  ##    ##  ##                             ##   ##  ####
  ## #    ##  ##    ##                                 ##   ##   ##
  ##      ##  ##    ##        ##       ##       ##     ##   ##   ##
 ####      ####    ####       ##       ##       ##      #####   ####

 function logLetras(palavra){
   for(letra of palavra){
     console.log(letra);
   }
 }

 const palavra = "abacaxi";
 loLetras(palavra)
 //a
 //b 
 //a 
 //c 
 //a
 //x
 //i
///////
function logNumeros(nuns){
  for(num of nums){
    console.log(num;)
  }
}

const nums = [30, 20, 233, 2];

logLetras(nums)
//30
//20
//233
//2

    */
   /*
 ##   ##  ###        ##      ###
 ##   ##   ##                 ##
 ##   ##   ##       ###       ##      ####
 ## # ##   #####     ##       ##     ##  ##
 #######   ##  ##    ##       ##     ######
 ### ###   ##  ##    ##       ##     ##
 ##   ##  ###  ##   ####     ####     #####


  funtion exemploWhile(){
    let num = 0

    while(num <= 5){
      console.log(num);
      num++;
    }
  }
  exempleWhile()
  //0
  //1
  //2
  //3
  //4
  //5
  
   */
  /*
 #####                                        ##   ##  ###        ##      ###
  ## ##                                       ##   ##   ##                 ##
  ##  ##   ####                               ##   ##   ##       ###       ##      ####
  ##  ##  ##  ##                              ## # ##   #####     ##       ##     ##  ##
  ##  ##  ##  ##                              #######   ##  ##    ##       ##     ######
  ## ##   ##  ##     ##       ##       ##     ### ###   ##  ##    ##       ##     ##
 #####     ####      ##       ##       ##     ##   ##  ###  ##   ####     ####     #####

 function exempleDoWhile(){
   let num = 0;

   do{
     console.log(num);
     num++
   }while(num <= 5)
 }

 exempleDoWhile()
 //0
 //1
 //2
 //3
 //4
 //5

 function exempleDoWhile(){
   let num = 6;

   do {
     console.log(num);
     num++
   }while(num <= 5)
 }
 
 exempleDoWhile()
 //6 

  */
 /*
 ######   ###        ##
 # ## #    ##
   ##      ##       ###      #####
   ##      #####     ##     ##
   ##      ##  ##    ##      #####
   ##      ##  ##    ##          ##
  ####    ###  ##   ####    ######

 const pessoa = {
   firstName: "André",
   lastName: "Soares",
   id      : 1,
   fullName: function(){
     return this.firstName + " " + this.lastName;
   },
   getId: function(){
     return this.id;
   }
 };

 pessoa.fullName();
 //"André Soares"
 pessoa.getId();
 //1

 ///
 const pessoa = {
   firstName: 'Diego',
   lastName: 'Vieira',
  getFullName: function(){
    console.log(`${this.firstName} ${this.lastName}`);
  },
 };

 getFullName();

 ////
 const pessoa={
 nome:'Miguel',
};
const animal={
  nome:'Murphy',
};
function getSomething(){
 console.log(this.nome);
}
getSomething.call(pessoa);
 */

/*

   ####             ###      ###
  ##  ##             ##       ##
 ##        ####      ##       ##
 ##           ##     ##       ##
 ##        #####     ##       ##
  ##  ##  ##  ##     ##       ##
   ####    #####    ####     ####


const myObj={
    num1:2,
    num2:4,
};
function soma(a,b){
    console.log(this.num1+this.num2+a+b);
}
soma.call(my bj,1,5);
// 12

///

/*

   ##                        ###
  ####                        ##
 ##  ##   ######   ######     ##     ##  ##
 ##  ##    ##  ##   ##  ##    ##     ##  ##
 ######    ##  ##   ##  ##    ##     ##  ##
 ##  ##    #####    #####     ##      #####
 ##  ##    ##       ##       ####        ##
          ####     ####              #####


          const my0bj={
    num1:2,
    num2:4,
};
function soma(a,b){
    console.log(this.num1+this.num2+a+b);
}
soma.apply(myObj,[1,5]);
// 12






*/
/*

const retornaNomes = function(){
    return this.nome;
};
let bruno = retornaNomes.bind({nome:'Bruno'});
bruno();
// Bruno


*/

/*ARROW FUNCTIONS
//função normal
const helloWorld = function(){
  return "Hello World";
}
// passa a ser:
const helloWorld = () => {
  return "Hello World";
}
// quando a função é curta também pode ser representada dessa forma:
const helloWorld = () => "Hello World";

//mais exemplos:
//Caso exita apenas uma linha, pode dispensar as chaves e o return:
const soma = (a,b) => a + b;

soma(4,6);
//10

//ou  Caso exista apanas um parâmetro, pode dispensar os parênteses.

const soma = a => a;
soma(4);
//4
*//*
const myObj={
    num1:2,
    num2:4,
};
function soma(a,b){
    console.log(this.numl + this.num2+a+b);
}
soma.apply(myObj,[[1,5]);
// 12


*/

function findMax() {
    let max = -Infinity;//-infinity para garantir que possa ser mandado to tipo de numero tanto negativo quanto positivo
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("demo").textContent = findMax(4, 5, 6);
