// codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cms")

const perimetroCuadrado = ladoCuadrado * 4
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cms")

const areaCuadrado = ladoCuadrado **2
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// codigo del triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " 
			+ ladoTriangulo1 
			+ " cm, " 
			+ ladoTriangulo2
			+ " cm, " 
			+ baseTriangulo
			+ " cm"
			)
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro del triangulo es: " + perimetroTriangulo)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El area del triangulo es: " + areaTriangulo)

console.groupEnd()


// codigo del circulo
console.group("Circulos")
const radioCirculo = 4
console.log("El radio del circulo es: " + radioCirculo + " cms")

const diametroCirculo = radioCirculo * 2
console.log("El diametro del circulo es: " + diametroCirculo + " cms")

const pi = Math.PI
console.log("PI es: " + pi)

const perimetroCirculo = diametroCirculo * pi
console.log("El perimetro del circulo es: " + perimetroCirculo)

const areaCirculo = (radioCirculo **2) * pi
console.log("El area del circulo es: " + areaCirculo)

console.groupEnd()


