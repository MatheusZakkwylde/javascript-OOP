// Criação de objeto simples como um json
var Person = {

   name: 'Matheus',

   getName :function () {
       return this.name
   }
}

//Dessa forma de criação não existe o termo de encapsulamento como podemos ver a baixo
console.log(Person.getName())
console.log(Person.name)