// Função assíncrona
async function buscaEndereço(cep) {
	try {
		let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
		let consultaCEPJson = await consultaCEP.json();
		if (consultaCEPJson.erro) {
			throw Error("CEP não existe!");
		}
		return consultaCEPJson;
	} catch (erro) {
		console.log(erro);
	}
}

// Array de ceps
let ceps = [39495000, 39400070, 39480000];

// Retorna um array de Promises
conjuntoCeps = ceps.map((valores) => buscaEndereço(valores));

// Executa um array de Promises
Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
