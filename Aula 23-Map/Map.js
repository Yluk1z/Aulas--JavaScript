 /* 
    MAP
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array, com a mesma quantidade de itens do array original
        - Aceita 3 parâmetros
          -item do array
          - index
          - array completo

*/

const numbers = [1,2,3,4]
const students = [
    { name: "Lucas", age: 21},
    { name: "Leonardo", age: 25},
    { name: "Ronaldo", age: 26},
    { name: "Pedro", age: 20},
    { name: "Gabriel", age: 24},
]; 
/*
    const newArray = numbers.map ( (number) => {             // const newArray = numbers.map ( (number => number + 10 -2)) 
        const newArray = number + 10 - 2
        return newArray
    })

    console.log(newArray)
*/
/*
    const newStudents = students.map ( (student) => {
        const newStudents = {
            name: student.name + " Ferreira",
            age: student.age + 1
        }
        return newStudent;
    })

    console.log(newStudents)
*/

const double = number => number + 10 
const toReais = number => `R$ ${number.toFixed(2)}`

const newArray = numbers.map(double).map(toReais)

console.log(newArray)

