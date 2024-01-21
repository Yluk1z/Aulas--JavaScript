 const students = [
    { name: "Lucas", age: 21},
    { name: "Leonardo", age: 25},
    { name: "Ronaldo", age: 26},
    { name: "Pedro", age: 20},
    { name: "Gabriel", age: 24},

];

let allStudentsAge = 0

students.forEach( (student, index ) => {
    allStudentsAge += student.age
    
} )

const averageAge = allStudentsAge / students.length

console.log(` A média da idade dos aulos é ${averageAge.toFixed(0)}` )

/* forEach é uma função que percorre um array e executa uma função para cada elemento do array.
nesse caso estamos buscando a idade média dos alunos, assim o forEach irá percorrer a array  coletando todas as idades.
*/