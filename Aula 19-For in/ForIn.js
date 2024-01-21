/* for in serve para percorrer um objeto */

const stundent = {
    name: "Lucas Gabriel",
    age: 21,
    genre: "male"
}

for(let property in stundent) {
    console.log(`${property}: ${stundent[property]}`)
}