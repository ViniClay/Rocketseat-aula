var clima = "quente"
var clima = "frio"
console.log(clima)
//Vale sempre o último valor aplicado

//let idade: Number
//Dessa forma não há como mudar seu tipo de dado
//Var funciona fora do escopo, let e const, não

let amor, adjetivo, idade
amor ="Julia"
adjetivo = "o amor da minha vida"
idadej = 20
eu = "Vinícius"
idadev = 20
console.log('A ' + amor +' é ' + adjetivo +' e tem ' + idadej + ' anos')
console.log(`O ${eu} tem ${idadev} anos`)

let number = 540.9683
console.log(number.toFixed(2).replace(".", ",")) 
// toFixed : Irá arredondar para a quantidade de casas escolhida
// replace : Irá trocar o primeiro pelo segundo caractere

console.log(adjetivo.toUpperCase()) // Todos os caracteres maiúsculos
console.log(adjetivo.toLowerCase()) // Todos os caracteres minúsculos
    
let phrase = "Eu quero viver"
console.log(phrase.includes("viver")) // Identificador em frases !!! case sensive (sensível à caixa alta)
 
let myArray = phrase.split(" ") // criar um array separado pelo caractere definido
let phraseWithUnderscore = myArray.join("_") //transforma um array em string separadas pelo caractere definido
console.log(phrase)
console.log(myArray)
console.log(phraseWithUnderscore)

theArray = new Array(10)
console.log(theArray)

function exemploDeArray() {
console.log([
    "a",
    7,
    {type: "array"},
    function() {return "alo"}
].length)

console.log([
    "a",
    7,
    {type: "array"},
    function() {return "alo"}
][1])

console.log([
    "a",
    7,
    {type: "array"},
    function() {return "alo"}
][3]())

console.log([
    "a",
    7,
    {type: "array"},
    function() {return "alo"}
][2].type)
}
exemploDeArray()

let word = "Julia"
console.log(Array.from(word))

let techs = ["html", "css", "js"]

techs.push("nodejs") // Adicionar argumento no fim
techs.unshift("sql") // Adicionar argumento no começo
techs.pop() // Remover do fim
techs.shift() // Remover do começo
//console.log(techs.slice(1, 3)) // Pegar somente alguns argumentos do array
//console.log(techs.splice(1, 3)) // Remover somente alguns argumentos do array

let index = techs.indexOf('html')    // \
techs.splice(index, 1)               //  Remover específico
console.log(techs)                   // /