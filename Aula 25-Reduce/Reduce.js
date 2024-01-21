/*
    REDUCE
        -Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
        -Aceita 4 parâmetrod
            - acumulador
            - valor atual
            - index
            - array completo
*/

const list = [1,2,3,4];

const sum = list.reduce( (acc, current) => {   // const sum = list.reduce( (acc, current) => acc + current, 0)
    return acc + current

}, 10)

console.log(sum)

// Nesse ex. estamos adicinando valor 10 ao nosso acc inicial e após passar pelo current soma pelo item seguinte da array e repete até finalizar a array.

