const { gets, print } = require('./funcoesAuxiliares');

let i = 1
while (true) {
    var valor = gets()
    if (valor === undefined) {
        break;
    } else if (i == 1 || valor > maior){
       var maior = valor
    } 
    i++
}
print(maior)
