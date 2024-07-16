var peso = 90
var altura = 1.80
var imc = peso / Math.pow(altura,2);
imc = 40
console.log(imc)

if (imc < 18.5) {
    var situaçao = "abaixo do peso"
} else if (imc < 25) {
    var situaçao = "peso normal"
} else if (imc < 30) {
    situaçao = "acima do peso"
} else if (imc < 40) {
    situaçao = "obeso"
} else if (imc >= 40) {
    situaçao = "obesidade grave"
}
console.log(situaçao)