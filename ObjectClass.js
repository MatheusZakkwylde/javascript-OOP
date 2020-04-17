//Criação de objeto com o class
class Person {
    //construtor do objeto
    constructor(argName) {
        this.name = argName
    }
    
    //chamda do get
    get getName() {
        return this.name
    }
}
//criação do objeto
let objectPerson = new Person("Matheus")
//Assim como a criação do objeto como um array ou json não existe regra de encapsulamento
console.log(objectPerson.getName)
console.log(objectPerson.name)

