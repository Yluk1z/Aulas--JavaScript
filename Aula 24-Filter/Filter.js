/* filter é uma função que recebe um array e retorna um novo array com os elementos true selecionados */

/*
const students = [
    { name: "Lucas", testeGrade: 8 },
    { name: "Gabriel", testeGrade: 5  },
    { name: "Ricardo", testeGrade: 7  },
    { name: "Richerd", testeGrade: 4  },
    { name: "Ronaldo", testeGrade: 9  }

];

const newStudentList = students.filter( student => {
    return student.testeGrade >= 6

})

console.log(newStudentList)
*/

// Nesse ex. estamos retonando apenas as pessoas com notas maiores ou igual a 6

const list = [
    { name: "Lucas", vip: true },
    { name: "Gabriel", vip: false },
    { name: "Ricardo", vip: false },
    { name: "Richerd", vip: true },
    { name: "Ronaldo", vip: false },

];

const justVips = list.filter( client => {
    return client.vip 

})

console.log(justVips)

//Nesse ex. estamos adicionando a nova lista os vips true