console.log(true ? 'alo' : 'nada');
console.log(false ? 'alo' : 'nada');

let name = new String('Vini');
name.surName = 'Clay';
let age = new Number(20);
console.log(name, age)

const person = {
    name: "Vini",
    age: 20
}
delete person.age
console.log(person)
// Operações aritméticas : +(soma), -(subtração), *(multiplicação), /(divisão), **(exponencial).
let remainder // Tradução: Resto
remainder = 7 % 3
console.log(remainder)

let increment = 0
increment++ // Soma 1 algarismo ao número
console.log(++increment) // Soma 1 algarismo antes de rodar o 'console.log'

let decrement = 0
decrement-- // Subtrai 1 algarismo ao número
console.log(--decrement) // Subtrai 1 algarismo antes de rodar o 'console.log'

let temperature = 37

if (temperature >= 37.5) {
    console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('febre')
} else console.log('saudável')

let expression = 'a'
switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('Undefined')
        break
}

function SayMyName(name = '') {
    if (name === '') {
        throw 'O nome é obrigatório'
    }
    console.log('O.K.')
}
try {
    SayMyName('')
} catch (e) {
    console.log(e)
}

for(let i = 10; i > 0; i--) {
    if (i === 8) {
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log(i)
}

let u = 1;
while(u < 10) {
    console.log(u)
    u *= 2;
}

let names = ['Joao', 'Paulo']
for (let name of names) {
    for (let char of name) {
        console.log(char)
    }
}

let Fulano = {
    name: 'Vinícius',
    age: 20,
    weight: 55.4
}
for (let property in Fulano) {
    console.log(property);
    console.log(Fulano[property])
}