class car {
    constructor() {
        let name
        let color

        this.setName = function(argName){
            name = argName
        }

        this.getName = function () {
            return name
        }

        this.setColor = function(argColor){
            color = argColor
        }
        
        this.getColor = function () {
            return color
        }
    }
}

//Dessa maneira existe um encapsulamento, mas de forma incorreta mas infelizmente neste momento é o
//que o javascript fornece.
let gol = new car()
gol.setName('gol')
gol.setColor('Blue')

console.log(gol.getName()+' '+gol.getColor())
