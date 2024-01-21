const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zunkerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

];


const add10PerentMarketValue = company => {
    company.marketValue = company.marketValue + (company.marketValue/ 10)

    return company
}

const filterOldCompanies = company => {
    if(company.foundedOn < 2000)

    return company
}

const allOldCompaniesMarketValue =  (acc, company) =>  acc + company.marketValue

 
    const myBestCompanies = companies
    .map(add10PerentMarketValue)
    .filter(filterOldCompanies)
    .reduce(allOldCompaniesMarketValue , 0);


console.log(myBestCompanies)


// Nesse ex. adicionamos 10% no marketValue de cada compania e filtrei as empresas fundadas antes dos 2000, e por ultimo pegamos o valor de marketValue das companias e somamos, assim garantindo o valor final.
   

