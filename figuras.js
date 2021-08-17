// codigo del cuadrado
console.group("Cuadrados")
/* const ladoCuadrado = 5
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cms") */

function perimetroCuadrado(lado) {
	return lado * 4
}

function areaCuadrado(lado) {
 return lado **2
}	
console.groupEnd();


// codigo del triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
/* console.log("Los lados del triangulo miden: " 
			+ ladoTriangulo1 
			+ " cm, " 
			+ ladoTriangulo2
			+ " cm, " 
			+ baseTriangulo
			+ " cm"
			) */
/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo) */

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base
}
/* console.log("El perimetro del triangulo es: " + perimetroTriangulo)*/

function areaTriangulo(base, altura) {
	return (base * altura) / 2
} 

/* console.log("El area del triangulo es: " + areaTriangulo) */
console.groupEnd()


// codigo del circulo
console.group("Circulos")
/* const radioCirculo = 4
console.log("El radio del circulo es: " + radioCirculo + " cms") */

function diametroCirculo(radio) {
	return radio * 2
} 
/* console.log("El diametro del circulo es: " + diametroCirculo + " cms")*/
const pi = Math.PI
console.log("PI es: " + pi)

function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio)
	return diametro * pi
} 


function areaCirculo(radio) {
	return (radio **2) * pi
} 

console.groupEnd()


