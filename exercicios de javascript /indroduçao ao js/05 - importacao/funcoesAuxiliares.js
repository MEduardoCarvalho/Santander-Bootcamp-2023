const entrada = [39,49,38,72,42,94,70,28,84,2,7,28,3,90,4,0,8]
var i = -1

function gets(){
    i++
    return entrada[i];
}

function print(texto) {
    console.log(texto)
}

module.exports = {
    gets,
    print
  };