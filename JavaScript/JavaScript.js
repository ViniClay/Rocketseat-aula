console.log(12 * "abc")
// NaN (Not a Number)
//comentários em linha
/* Comentários
Em várias linhas*/
/* Expressões (Strings):
"" '' 
`` (crase não é restrita à linha)
*/

console.log({
    Name: "Cellphone",
    Material: "Poliuretano",
    Andar: function () {
        console.log('andar')
        }
})
const person = {
    name: 'Vinícius',
    age: 20,
    weight: 56,
    married: true
}

if(person.married === true) 
{console.log(`O ${person.name} tem ${person.age} anos e ${person.weight} kg, estado civil: casado`)} 
else {console.log(`O ${person.name} tem ${person.age} anos e ${person.weight} kg, estado civil: solteiro`)}

//Array

const animals = [
    'Dog',
    'Cat',
    {
        name: 'Cat',
        color: 'Black'
    }
]

console.log(animals[0])
console.log(animals[1])
console.log(animals[2].name)
console.log(animals.length) //quantidade de linhas no array