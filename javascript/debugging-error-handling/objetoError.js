//Objeto ERROR
//new Error(message,fileName,lineNumber)
// todos os parâmetros são opcionais
//const MeuErro = new Error('Mensagem Inválida');
//throw MeuErro;

//O Error pode ter um nome 
// MeuErro1 = new Error('Mensagem Inválida');
//MeuErro1.name = 'InvalidMessage';

// MeuErro;
//MeuErro.stack stack significa pilha

//Atividade prática 

function validaArrays(arr, num) {
    let demo1 = document.getElementById('demo1');
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			demo1.textContent= 'RangeError!';
			demo1.textContent=  e.stack;
		} else if (e instanceof ReferenceError) {
			demo1.textContent= 'ReferenceError!';
			demo1.textContent= e.stack;
		} else {
			demo1.textContent = 'Outro tipo de erro!';
			demo1.textContent = e.stack;
		}
	}
}

document.getElementById("demo").textContent = (validaArrays());