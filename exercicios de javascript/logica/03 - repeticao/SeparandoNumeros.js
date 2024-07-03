const numeros = [1,2,4,3,22,99,43,21,78,75,11,20,12,48,92]
var listaPar = []
var listaImpar = []
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    let ePAr = numero % 2 === 0
   if (ePAr) {
    listaPar.push(numero)
   } else {
    listaImpar.push(numero)
   }
    
}
console.log(listaPar)
console.log(listaImpar)