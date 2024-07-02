var nota1 = 8
var nota2 = 5
var nota3 = 9
let media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media < 5 ) {
    console.log("reprovado")
} else if (media <= 7) {
    console.log("recuperaçao")
} else if (media > 7) {
    console.log("aprovado")
}