const lista1 = [
	1,
	3,
	4,
	2,
	5,
	6
]

//devuelve si el numero es par o impar para calcular la mediana
function esPar(numero) {
	if (numero % 2 === 0) {
		return true
	}
	else {
		return false
	}
}

//calcular el promedio de los dos numeros si la lista es par
function calcularMedia(lista) {
		const sumaLista = lista.reduce(
			function (valorAcumulado = 0, nuevoElemento) {
				return valorAcumulado + nuevoElemento
			}
		)
	
		const promedioLista1 = sumaLista / lista.length
		return promedioLista1
	}


//funcion principal
function calcularMediana(lista) {
	let mediana;
	let listaOrdenada =  lista.sort((a, b) => a - b)
	const mitadLista1 = parseInt(listaOrdenada.length / 2)
	
	
	if (esPar(listaOrdenada.length)) {
		const elemento1 = listaOrdenada[mitadLista1-1] 
		const elemento2 = listaOrdenada[mitadLista1]
		const promedio1y2 = calcularMedia([elemento1, elemento2])
	
		return mediana = promedio1y2
	
	} else {
		return mediana = listaOrdenada[mitadLista1]
	}
}

let mediana = calcularMediana(lista1)
console.log(mediana)