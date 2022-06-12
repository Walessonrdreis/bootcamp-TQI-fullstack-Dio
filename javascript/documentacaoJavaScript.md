# Documentação JS
___
Links Úteis


<div 
style=
" width:100%; height:auto; 
border:2px solid #559ffb;
 font-size:16px;
 color: #fff;
">
<a href="https://www.w3schools.com/js/js_arrays.asp)">Arrays</a>
<hr/>



</div>


## lembrete 
### Atribuição
camel case = camelCase


1. <strong>`return` </strong> Para a função e retorna o valor

2. variáveis `const` serão sempre declaras: NOME_DA_VARIAVEL

3. `calbacks` função passada como argumento para outras

4. função autoincocavel.`IIFE` função anonima entre parenteses seguida por outro par de parentes
5. Objeto `arguments` um array com todos os parâmetros passados quando a função foi invocada.

6. Técnica `Spread` uma forma de lidar separadamente com elementos, usando ... Que determinam os elementos separadamente, por exemplo em um array com três elementos console.log(nomeDaFuncao (...nomeDoArray));
7. Técnica `Rest` combina os argumentos em um array.
8. ` Object Destructuring` Desestruturação de objeto. Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.
9. ` If else` se senão.
10. `Switch/case` equivale a uma comparação de tipo e valor (===).  -Sempre precisa de um valor "default". -Ideal para quando se precisa comparar muitos valores.
___

11. `arrays`
12. `FOR`
13. `fOR...IN` Loop entre propriedades enumeradas de um objeto.
14. `prop` equivale a cada propriedade dentro do objeto escolhido ex: for(prop in obj)...
15. `FOR...OF` Loop entre estruturas iteráveis (arrays, strings)
16. `WHILE`(enquanto)Executa a função até que a condição se torne falsa.
17. `DO...WHile` Executa instruções até que a condição se torne falsa. Porém a primeira execução sempre ocorre.
18. `THIS` Palavra reservada que é uma referencia de contexto. ex: em um objeto pessoa, this refere-se ao objeto pessoa. Ele  
19. Sempre que um função está dentro de um objeto ela é chamada de método. quando se utiliza this. dentro de um método, ele vai se referir ao elemento pai desse método
20.  `call()`recebe o parâmetro o qual .this se refere. É possível passar parâmetros para essa função separando-os por vírgulas.Modificando o valor de this
21. `apply()` Semelhante ao call, com a única diferença que ao se passar os parâmetros, será dentro de um array [1,5] 
22. `bind` Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro. quando uma variável recebe função.bind, ao ser chamada ela deve ser chamada seguida de (), afinal ela se torna em tese a função clonada.
23. `Arrow function`   .Não faz hoisting. Sempre armazenada em const. Não existe objeto arguments, o construtor new MeuObjeto() não pode ser utilizado. this sempre será o objeto global, não usa, call, apply e bind. Nunca fazer arrow function como método de um objeto.
24. `hoisting` pode ser chamada antes de ter sido declarada, funções comuns fazem hoisting.
25. `push` 

26. `Promise`
27. `setTimeout`
28. `await` pode realizar encadeamento das chamadas
29. `.then` é o que será feito depois, caso a promise seja resolvida

### Debugging e Error Handling   

### javascript assíncrono 
1. Assíncrono: que não ocorre ou não se efetiva ao mesmo tempo.
2. O javascript roda de maneira síncrona, efetua um processo por vez
3. Promises: Objeto de processamento assíncrono. Inicialmente, seu valor é desconhecido. Ela pode estão, ser <strong>resolvida</strong> ou <strong>rejeitada</strong>.

A promise te 3 estados:
1. pending: Pendente
2. Fulfilled: Completado
3. Rejected: quando deu errado, foi rejeitado. 

4. Async/await: Funções assíncronas precisam dessas duas palavras chave.
5. A palavra `async` existe para definir funções assíncronas. quando for necessário resolver uma promise é necessário o async para ser possível a utilização do `await` palavra criada para ser utilizada exclusivamente para o promise.

O await para o código até o promise ser resolvido, pois o javascript por se só não resolve pois ele é síncrono, por isso sem o await é impossível conseguir o resultado da promise. Em outras palavras, só com o uso da palavra await se consegue o resultado da promise.

se for chamado apenas uma promise sem await, ela retorna outra promise. Quando a função for assíncrona é necessário ter a await, pois se assim não for ela tera como resultado sempre <pending> Pendente. quando for chamar <strong>`await myPromise()`</strong>

