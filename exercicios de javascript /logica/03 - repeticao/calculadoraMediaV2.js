const notas = [];

notas.push(9);
notas.push(2);
notas.push(1);
notas.push(8);

for (var i = 0; i < notas.length; i++) {
    const nota = notas[i];
    var soma = soma += Number(nota);
}
var media = soma / notas.length;
console.log(media)
