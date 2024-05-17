let arregloMaximo: number[]= [4, 7, 93, 45, 67, 23, 29, 78, 11, 16];
let numeromaximo: number = 0
let contador : number

for (contador=0; contador<=11; contador++) {
    if (arregloMaximo[contador]> numeromaximo)
        numeromaximo= arregloMaximo[contador]
}
console.log('el numero maximo es ' + numeromaximo)
parImpar(numeromaximo)

function parImpar (numeromaximo: number) {
    if (numeromaximo%2 == 0) {
        console.log('el numero ' + numeromaximo + ' es par');
    } else {
        console.log('el numero ' + numeromaximo + ' es impar')
    }
}