const list = [20,3,234,12,17,541,6,87,275,1000];

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zunkerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

];
/*
 const newNumberList = list.filter( number =>{
        if(number % 2 === 0 &&  number % 5 === 0) return true  // if(number % 2 !== 0 ||  number % 5 !== 0) return false 
        else return false   // else return true
})

console.log(newNumberList)
*/

    const newCompaniesList = companies.filter( company => {
        if(company.marketValue > 200 && company.foundedOn > 1975 )  return true
        return false 
    
    })

console.log(newCompaniesList)

// Ex.: Para descobrir os numeros pares e divisiveis por 5, no outro as companias que foram fundadas depois de  1975 com o valor de 200 mil para cima.

