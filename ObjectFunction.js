//A forma de função é a mais usada é de forma que os objetos ficam encapsulados
let Person = function (argName) {
    let name = argName

     this.getName = function () {
         return name
     }
}


let Pedro = new Person("Pedro")

console.log(Pedro.getName())