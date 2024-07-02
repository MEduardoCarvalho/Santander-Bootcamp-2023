var valorGasolina = 5.23
var valorEtanol = 4.32
var tipo = "gasolina"
const distaciaKm = 100
if (tipo == "gasolina") {
    var gastoMedio  = 8
    var valorCombustivel = valorGasolina
} else if (tipo == "etanol") {
    var gastoMedio = 10
    var valorCombustivel = valorEtanol
}
var valorTotal = distaciaKm / gastoMedio * valorCombustivel;

console.log(valorTotal.toFixed(2))