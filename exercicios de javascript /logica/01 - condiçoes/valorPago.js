var preco = 100
var opcaoPagamento = 4
function verificarFormaDePagamento(valor ,opcao) {
    var total
if (opcao == 1) {
    total = valor - (valor * 0.10)
} else if (opcao == 2) {
    total = valor - (valor * 0.15)
} else if (opcao == 3) {
    total = valor
} else if (opcao == 4) {
    total = valor + (valor * 0.10)
} console.log(total)
}
verificarFormaDePagamento(300, 3)
verificarFormaDePagamento(900, 4)
verificarFormaDePagamento(200, 1)


