const lista1 = [
	1,
	2,
	3,
	3,
	2, 
	4,
	2,
	2,
	42
]

function calcularModa(lista) {
	//crearemos un objeto, por cada elemento que se repita
	const listaCount = {}
	lista.map( elemento => {
		if (listaCount[elemento]) {
			listaCount[elemento] += 1
		} else {
			listaCount[elemento] = 1
		}
	})
	
	const listaArray =  Object.entries(listaCount).sort( (valorAcum, valorNew) => valorNew[1] - valorAcum[1] )
	
	const moda = listaArray[0]
	
	return moda
}

let moda = calcularModa(lista1)

console.log(moda)
