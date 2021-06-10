function getScore(numberScore) {

if (numberScore <= 100 && numberScore >= 90)  {
    charScore = 'A'
} else if (numberScore < 90 && numberScore >= 80) {
    charScore = 'B'
} else if (numberScore < 80 && numberScore >= 70) {
    charScore = 'C'
} else if (numberScore < 70 && numberScore >= 60) {
    charScore = 'D'
} else if (numberScore <60 && numberScore >= 0) {
    charScore = 'F'
} else (charScore = 'inválida')

console.log ('Nota ' + charScore)
}

getScore (100)

//---------------------------------------------//
let income = [
    salaryDad = 2000,
    salaryMom = 1500,
    vale = 250,
    valueSon = 350,
    totalIncome = salaryDad + salaryMom + vale + valueSon
]

let expense = [
    light = 120,
    water = 100,
    condominium = 200,
    rend = 600,
    food = 600,
    car = 500,
    school = 300,
    transport = 500,
    medicine = 200,
    totalExpense = light + water + condominium + rend + food + car + school + transport + medicine
]

console.log (totalIncome - totalExpense)

//---------------------------------------------//
function TransformeDegrees (Degrees) {
let Celsius
let Fahrenheit
let Result = ""

for (let char of Degrees) {
    if (char != '°') {
    Result += char
    continue
    } else {
    break}
}

if ((Degrees[(Degrees.length)-1] == 'C') && (Degrees[(Degrees.length)-2] == '°')) {
    Celsius = new Number (Result)
    Fahrenheit = (((Celsius /5) *9) +32)
    console.log(`Celsius to Fahrenheit: ${Result}°C --> ${Fahrenheit.toFixed(2)}°F`)
} else if ((Degrees[(Degrees.length)-1] == 'F') && (Degrees[(Degrees.length)-2] == '°')) {
    Fahrenheit = new Number (Result)
    Celsius = (((Fahrenheit-32) /9) *5)
    console.log(`Fahrenheit to Celsius: ${Result}°F --> ${Celsius.toFixed(2)}°C`)
} else {console.log("Invalid")}
}

TransformeDegrees ('273°C')

//---------------------------------------------//

/*
Contar o número de categorias e o número de livros em cada categoria ok
Contar o número de autores ok
Mostrar livros do autor Augusto Cury ok
Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor 
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covery",
            }
        ],
    },
];

let phrase01 = "Em nossa biblioteca temos " + booksByCategory.length + " categorias: "
let no = 0
for (let category of booksByCategory) {
    if (phrase01.includes("livros")){phrase01 += " e "}
    phrase01 += booksByCategory[no].category + " com " + booksByCategory[1].books.length + " livros"
    no++
}
console.log(phrase01 + ".")

let phrase02 = ""
let nu = 0
let n1 = 0
for (let category of booksByCategory) {
    while (n1 < category.books.length) {
    text = category.books[n1].author
    if (phrase02.includes(text)) {nu--}
    else {
    if (phrase02 != "") {phrase02 += ", "}
    phrase02 += category.books[n1].author}
    nu++
    n1++}
    n1 = 0
}
console.log("Aqui temos " + nu + " autores: " + phrase02)

let author 
function BooksOf(author) {
let booksOfAuthor = ""
for (let category of booksByCategory) {
    while (n1 < category.books.length) {
    if (category.books[n1].author == author) {
    if (booksOfAuthor != "") {booksOfAuthor += ", "}
        booksOfAuthor += category.books[n1].title
    }
    n1++}
    n1 = 0
}console.log("Livros de " + author + ": " + booksOfAuthor + ".")
}

BooksOf("Stephen R. Covery")
BooksOf("Augusto Cury")
BooksOf("T. Harv Eker")