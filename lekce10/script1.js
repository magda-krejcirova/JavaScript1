const objekt = {
    jmeno: "Michal", 
    prijmeni: "Kucera", 
    pozice: "Lektor"
}

const pole = ["polozka1", "polozka2", "polozka3"]
//                0            1           2
const teploty = [5.5, 7.8, 10, 12, 17, 21, 24, 15]
//                0    1    2   3   4   5   6   7

const lide = [
    {jmeno: "Jan", prijmeni: "Malir", pozice: "IT konzultant"}, // 0
    {jmeno: "Jana", prijmeni: "Mala", pozice: "IT konzultant"}, // 1
    {jmeno: "Karolina", prijmeni: "Chytra", pozice: "IT konzultant"} // 2
]

const firma = [
    {
        oddeleni: "IT",
        pracovnici: [
            "Milan",
            "Martina",
            "Lenka"
        ],
        manazer: "Lenka"
    },
    {
        oddeleni: "Marketing",
        pracovnici: [
            "Michaela",
            "Marta",
            "Jakub"
        ],
        manazer: "Zuzana"
    }
]

console.log(objekt.jmeno)
console.log(teploty[3])
console.log(teploty[6])
console.log(lide[1].jmeno)
console.log(firma[1].pracovnici[1])

//array.splice(2, 0, newItem);

const fruits = ['jablko', 'hruška', 'banán', 'jahoda', 'malina']

console.log(`puvodni pole ${fruits}`)
console.log(fruits.length)
console.log(fruits[5])
console.log(fruits.pop())
console.log(`pole po aplikaci metody pop: ${fruits}`)
console.log(fruits.push("broskev"))
console.log(`pole po aplikaci metody push: ${fruits}`)

fruits[1] = "meloun"
console.log(`pole po prepsani hodnoty: ${fruits}`)

console.log(fruits.shift())
console.log(`pole po aplikaci metody shift: ${fruits}`)

console.log(fruits.unshift("kokos"))
console.log(`pole po aplikaci metody unshift: ${fruits}`)

const index = fruits.indexOf("jahoda")
fruits[index] = "ostruzina"
console.log(`pole po prepsani hodnoty: ${fruits}`)

const index2 = fruits.indexOf("meloun")
fruits.splice(index2, 1) //nahrazuji
console.log(`pole po smazani hodnoty: ${fruits}`)

const fruits2 = fruits.slice(0, 2) //rozsekam na dalsi casti pole
console.log(`Nove pole fruits2: ${fruits2}`)

console.log(fruits.includes("ostruzina"))

///////////////////////////////////
const fruits = ['jablko', 'hruška', 'banán', 'jahoda', 'malina']

fruits.forEach((polozka, index) => {
    console.log(`Polozka ${polozka} je na indexu ${index}`)
})

const jmena = ["Milena", "Jarka", "Martin", "Jana"]

jmena.forEach((polozka) => { 
    document.body.innerHTML += `<p>${polozka}@czechitas.cz</p>`
})