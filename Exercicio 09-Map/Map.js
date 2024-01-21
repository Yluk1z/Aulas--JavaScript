/*

const list = [
    { name: "Lucas", vip: true },
    { name: "Gabriel", vip: false },
    { name: "Ricardo", vip: false },
    { name: "Richerd", vip: true },
    { name: "Ronaldo", vip: false },
];

const newSector = list.map((person) => {
    return {
        name: person.name,
        vip: person.vip,
        sector: person.vip ? "Black" : "Green",
    };
});

console.log(newSector);

*/

const students = [
    { name: "Lucas", testeGrade: 8 },
    { name: "Gabriel", testeGrade: 5  },
    { name: "Ricardo", testeGrade: 7  },
    { name: "Richerd", testeGrade: 4  },
    { name: "Ronaldo", testeGrade: 9  }

];

const approvedStudants = students.map((student) => {
    return {
        name: student.name,
        finalResult: student.testeGrade >= 6 ? "approved" : "disapproved",
    };
});

console.log(approvedStudants)

// Ex.: Para adicionar as pessoas vips para o setor black e no outro quem foi aprovado