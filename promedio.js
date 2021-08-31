const lista1 = [
	100,
	200,
	300,
	500,
]


function calcularMedia(lista) {
/* 	let sumaLista1 = 0
	for (let i = 0; i < lista.length ;i++) {
		sumaLista1 += lista[i]
	} */

	//alternativa al ciclo FOR
	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento
		}
	)

	const promedioLista1 = sumaLista / lista.length
	return promedioLista1
}