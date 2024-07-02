class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastomedio) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastomedio
    }

    valor(km , valorDaGasolina)  {
        return (km * this.gastoMedioPorKm / valorDaGasolina).toFixed(2)
    }
    
}

var carroDaAlice = new Carro("fiat", "branco" , 8)

console.log(carroDaAlice)
console.log(carroDaAlice.valor(100, 7.90))