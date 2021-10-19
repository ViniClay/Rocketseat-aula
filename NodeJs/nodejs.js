// // Atributos globais
// module.exports = 'Para exportar dados entre arquivos'
// require('') // para carregar e armazenar dados no cache
// process() // processo que está rodando
//
//const getFlag = require('./export')
//console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`)
//
//=================================================================
//
//const question = [
//    "Qual o seu nome?",
//    "Que dia é hoje",
//    "Seu dia foi produtivo?",
//    "O que aprendeu hoje?",
//    "Me diga uma frase para automotivação"
//]
//const answer = [
//
//]
//
//const ask = (index = 0) => {
//    process.stdout.write("\n" + question[index] + "\n")
//}
//let prhase = "não foi produtivo, mas v"
//ask()
//
//// ctrl+c ->fechar processo manual
//process.stdin.on("data", data => {
//    answer.push(data.toString().trim())
//    if (answer.length < question.length) {
//        ask(answer.length)
//    } else {process.exit()}
//})
//
//process.on('exit', () => {
//    if(answer[2] == "sim"){
//        prhase = "foi muito produtivo! V"
//    }
//    process.stdout.write(`
//    Olha que legal, ${answer[0]}!
//
//    Hoje seu dia ${prhase}eja que você aprendeu ${answer[3]}!
//
//    Sempre crescendo, certo? Agradeça sempre pelo seu dia!
//    
//    "${answer[4]}"
//    ${answer[0]}, ${answer[1]}
//    `)
//})
//
//==================================================================
//
//const timeOut = 4000 //sempre em milissegundos
//const finished = () => console.log('done!')
//const testing = () => console.log(`It's Okay`)
//
//setTimeout(finished, timeOut)
//// let timer = setTimeout(finished, timeOut)
////clearTimeout(timer)
//
//let interval = setInterval(testing, 1000)
//setTimeout(() => clearInterval(interval), timeOut);
//
//=================================================================
const {inherits} = require('util') // inherits significa herança
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const ouvido = new Character('eventos');
ouvido.on('help', () => console.log("Estou ouvindo " + ouvido.name))

ouvido.emit('help')
//emit para emitir eventos que podem ser ouvidos