//helpers
function esPar(number) {
	return (number % 2 === 0)
}

function calcularMedia(list) {
		const sumaLista = list.reduce( (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento )
		const promedioLista1 = sumaLista / list.length
		return promedioLista1
	}

//calculadora de medianas
function medianaSalarios(list) {
	const half = parseInt(list.length / 2)

	if (esPar(list.length)) {
		const personHalf1 = list[half-1]
		const personHalf2 = list[half]
		const mediana = calcularMedia([personHalf1, personHalf2])
		return mediana
	} else {
		const personHalf = list[half]
		return personHalf
	}
} 

//mediana general
const salariosCol = colombia.map( (person) => person.salary )
const salariosColSorted = salariosCol.sort( (salaryA, salaryB) => salaryA - salaryB )

const medianaGeneralCol = medianaSalarios(salariosColSorted)


//mediana top 10%
/* const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10]
const EJEMPLO = arrayEjemplo.splice(5, 2)
//imrime [5,6] */
const spliceStart = (salariosColSorted.length * 90) / 100
const spliceCount = salariosColSorted.length - spliceStart
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10)


console.log({
	medianaGeneralCol,
	medianaTop10Col
})