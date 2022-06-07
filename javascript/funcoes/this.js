function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Walas',
	idade: 27,
};

const pessoa2 = {
	nome: 'Daniela',
	idade: 29,
};

const pessoa3 = {
	nome: 'Samuel',
	idade: 6,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));