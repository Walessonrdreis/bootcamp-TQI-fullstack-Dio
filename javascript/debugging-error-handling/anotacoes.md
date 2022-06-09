# Tipos de erros no javascript

<style type="text/css">
body{
    border: 1px solid;
}
section{
    border: 1px solid
}
strong{
    color:red; 
}

</style>
<body>

<h1>Tratamento de erros</h1>

<section>
<div id="sumario">
<header> <h2>Sumario</h2></header>
<ol>
<li><a href="#ecmaError">EcmaScript Error</a> </li>
<li><a href="#domException">DOMException</a> </li>
<li><a href="#throw">Throw</a> </li>
<li><a href="#tryCAtch">Try Catch</a> </li>
<li><a href="#Finally">Finally</a> </li>



</ol>

</div>
</section>
<section>
<div id="significados">
<h3>Significados</h3>
<ul>
<li><h4><a href="https://super.abril.com.br/mundo-estranho/o-que-e-um-palindromo/"> Palíndromo</a></h4>
<p>É uma palavra ou frase que tem a mesma sequência de letras em qualquer ordem de leitura, seja da esquerda para a direita, seja da direita para a esquerda. Como as palavras “ovo” e “sopapos”, 
</p>
</li>
</ul>

</div>

</section>

<section>
<header><h2>Tipos de ERROS</h2></header>

<div class="ecmaError">
<h3 id="ecmaError">EcmaScript Error:</h3>
<p>
Erros que ocorrem em tempo de execução
</p>
<h3>Composto por:</3>
<ul>
<li>Mensagem</li>
<li>Nome</li>
<li>Linha/li>
<li>Call Stack</li>

</ul>

<h3><a href="#sumario">Topo</a></h3>
</div>
<div class="domException">
<h3 id="domException">DOMException</h3>
<p>Traduzindo seria erro no DOM</p>
<p>Erros relacionados ao Document Object Model, relacionado a algum problema no programa que está rodando na web page. São erros referentes a estrutura  da arvore DOM dentro de uma página web</p>

<h3><a href="#sumario">Topo</a></h3>
</div>
<div>
</div>

</section>
<section>
<header><h2>Tratando Erros</h2></header>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error">Documentação Mozilla object error</a>
<div id="throw">
<h3>Throw</h3>
<p> Ao usar o Throw no lugar do return que retorna uma string e não um erros, o throw retorna um erro </p>


<h3><a href="#sumario">Topo</a></h3>
</div>

<div id="tryCatch">
<h3>Try Catch</h3>
<a href="https://www.w3schools.com/js/js_errors.asp">Documentação W3Schools</a>
<p>A instrução define um bloco de código para executar(to try)(para tentar). <code><strong>try</strong></code></p>
<p>A instrução permite definir um bloco de código a ser executado, se ocorrer um erro no bloco de tentativa. <code><strong>catch</strong></code> </p>
<p>As instruções JavaScript vêm em pares:  <code><strong>try catch</strong></code></p>
<p>

<code>
try {<br>
    bloco do código para try 
<br>}<br>
catch(err){<br>
    Bloco do código para handle errors 
}
</code>
</p>
<p>A instrução <strong><code>throw</code></strong> permite que se crie um erro personalizado(throw of error)</p>


<h3><a href="#sumario">Topo</a></h3>
</div>

<div id="finally">
<h3>Finally</h3>
<p>Instrução que será chamada independente se tem um erro ou não</p>


<h3><a href="#sumario">Topo</a></h3>
</div>

</section>







<script>


</script>
</body>