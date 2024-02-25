const tajneHeslo = "mojeTajneheslo123"
const email = "magda.krejcirova@seznam.cz"
const id = "1"

console.log(tajneHeslo.length)
console.log("Ananas na pizze je nejlepsi".length)

const jmeno = prompt("Zadej jmeno")
console.log(jmeno.toUpperCase())
console.log(jmeno.toLowerCase())

//pro odstraneni mezer v textu na zacatku nebo na konci
console.log(jmeno.trim())
console.log(jmeno.trimStart())
console.log(jmeno.trimEnd())

//methoda slice odkud po pokud
// Martina
// 0123456
// 0-3 = Mar
console.log("Martina".slice(0,3))
console.log("Martina".slice(0,6)) //Martin
console.log("Martina".slice(3,6)) //tin
console.log(email.indexOf("seznam")) //zacatek retezce v poli, -1 pokud se retezec nenachazi
console.log(id.padStart(3,"0"))
console.log(id.padEnd(4,"x"))

//regualrni vyrazy: fce match a matchall

