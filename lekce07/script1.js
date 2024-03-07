const vypisJmeno = () => {
    console.log("Michal")
}

const textEl = document.querySelector("#jmeno")

let jmeno = "null" // String
let jmeno2 = null
let vek

if(textEl === null) {
    console.log("Element nenalezen")
} else {
    console.log(textEl)
}

if(vek === undefined) {
    console.log("Promenna vek nema definovanou hodnotu")
} else {
    console.log(vek)
}

console.log(vypisJmeno())
console.log(textEl)
console.log(vek)