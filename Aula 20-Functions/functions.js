/* function serve para criar uma função para poder chamar quando necessario*/

/*
function printingAboutThisClass() {
    console.log('Estou aprendedo JavaScript')
}

printingAboutThisClass()

*/
/*
function sum(numberOne, numberTwo) {
    console.log(numberOne + numberTwo)
}

sum(2,5)
*/

// nesse caso quando precisar somar dois numero é só chamar a função

/*
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo
}

const firstName = 14
const seccondNumber = 10

console.log(`O primeiro número é ${firstName}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos dois número é ${sum(firstName,seccondNumber)}`)

// Dessa vez utilizamos return para retorna o valor é não o console.log que retorna void

*/

const sum = (numberOne, numberTwo) => numberOne + numberTwo // dessa eonamizar codigo utilizamos o arrow Functions

const firstName = 14
const seccondNumber = 10

console.log(`O primeiro número é ${firstName}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos dois número é ${sum(firstName,seccondNumber)}`)



