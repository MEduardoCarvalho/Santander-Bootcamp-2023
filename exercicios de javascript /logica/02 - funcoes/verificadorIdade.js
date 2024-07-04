function verificadorIdade(anoNascimento) {
    let ano = new Date().getFullYear()
    let idade = ano - anoNascimento
    if (idade >= 18) {
        console.log("essa pessoa é de maior")
    } else if (idade < 18 && idade > 0){
        console.log("essa pessoa é menor de idade")
    }
}
verificadorIdade(2010)
