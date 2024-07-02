class Pessoa {
    nome;
    peso;
    altura
    imc;
    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (peso / (altura *altura)).toFixed(2);
    }
    
    classificaImc() {
        var imc = this.imc
        let situaçao
        if (imc < 18.5) {
            situaçao = "abaixo do peso"
        } else if (imc < 25) {
            situaçao = "peso normal"
        } else if (imc < 30) {
            situaçao = "acima do peso"
        } else if (imc < 40) {
            situaçao = "obeso"
        } else if (imc >= 40) {
            situaçao = "obesidade grave"
        }
        return this.situaçao = situaçao
    }
}

var nina = new Pessoa("nina",50,1.90)
nina.classificaImc()
console.log(nina)