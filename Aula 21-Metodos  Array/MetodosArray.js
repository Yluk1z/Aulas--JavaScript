/*
const students = ['João', 'Maria', 'Pedro', 'Leonardo', 'Lucas']

students.push('Gabriel') // Adiciona o nome Gabriel na lista de alunos 

delete students[2] // deleta o item selecionado no array

console.log(students)
console.log(students.length) // Mostra quantos itens temos presente na array
console.log(students.sort()) //Ordena a lista em ordem alfabética
*/

// push
// length
// sort
// delete

/*
const students = ['João', 'Maria', 'Pedro', 'Leonardo', 'Lucas']

students.splice(1,2)  // O método splice() é usado para adicionar ou remover elementos de escolha, como no exemplo que está selecionado do primeiro item até o segundo
students.splice(1,0, 'José') // esse caso escolhi a posição 1 da lista e de adicionar 0, mas para selecionar quanto itens desejo deletar e colocar o "jose" no lugar é determinado no segundo dado ex.: students.splice(1,2, 'José')
console.log(students)
*/

/*
const students = ['João', 'Maria', 'Pedro', 'Leonardo', 'Lucas']

const newStudent = students.slice(1,3) // Nesse caso o array vai começar no item 1 e finalizar a lista no item 3, caso eu queria pular apenas um item e só informar a primeira informação Ex.: const newStudent = students.slice(1) 
// lembrando o slice preisa ser uma variavel, pois ele cria uma nova array
console.log(newStudent)
*/

const students = ['João', 'Maria', 'Pedro', 'Leonardo', 'Lucas']

students.pop() // tira o ultimo item da array
students.shift() // tira o primeiro item da array

console.log(students)




