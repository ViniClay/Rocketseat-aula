// Gerar atalhos
/* 01 
function Names() {
    console.log("Vinicius"),
    console.log("Julia"),
    console.log("Lucas")
}*/

// Executar os atalhos
//Names()
//Names()

/* 02
const sum = function(Number1, Number2){
    console.log(Number1 + Number2)
}*/

/* 03
const sum = function(Number1, Number2) {
    let total = Number1 + Number2
    return total    
}

console.log(sum (2, 3)) // Gerando argumentos para os parâmetros respectivos na function
console.log(sum (7, 4)) // Reaproveitar o escopo

let Number1 = 2
let Number2 = 6
console.log(sum (Number1, Number2))*/

/* 04
let subject = 'create'

function createThink (subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

var SayMyName = () => {
    console.log('Clay')
}
SayMyName()

var SayMyName = (name) => {
    console.log(name)
}
SayMyName('Clay')*/

/* 05
function SayMyName (name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')
}

SayMyName (
    () => {
        console.log('estou em uma callback')
    }
)*/

/* 06
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
} 

const vini = new Person ('Vini')
const julia = new Person ('Julia')
console.log(vini.walk())
console.log(julia.walk())*/
