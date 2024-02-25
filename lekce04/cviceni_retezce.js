// interpolace retezcu

const nazev = "Vykoupení z věznice Shawshank"

let vysledekVlastnosti = document.getElementById('vysledekVlastnosti')

vysledekVlastnosti.innerHTML = "<strong> Název našeho filmu je: " + nazev + "</strong> </br>"

// Vypište do stránky počet znaků názvu.
vysledekVlastnosti.innerHTML += "Pocet znaku nazvu: " + nazev.length + "</br>"

// Vypište název filmu převedený na velká písmena.
vysledekVlastnosti.innerHTML += "Prevedeni na UpperCase: " + nazev.toUpperCase() + "</br>" 

// Vypište z názvu prvních pět písmen.
vysledekVlastnosti.innerHTML += "Prvnich 5 znaku: " + nazev.slice(0,5) + "</br>"

// Vypište z názvu posledních pět písmen.
vysledekVlastnosti.innerHTML += "Poslednich 5 znaku: " + nazev.slice(-5) + "</br>"

const email = prompt("Zadej email: ")
let atIndex = email.indexOf("@")+1
let jmeno = email.slice(0,atIndex - 1)
let domena = email.slice(atIndex,email.length)

let vysledekVlastnosti2 = document.getElementById('vysledekVlastnosti2')

vysledekVlastnosti2.innerHTML = "<strong> Email: " + email + "</strong> </br>"

vysledekVlastnosti2.innerHTML += "Pozice znaku @: " + atIndex + "</br>"

vysledekVlastnosti2.innerHTML += "Uzivatelske jmeno: " + jmeno + "</br>" 

vysledekVlastnosti2.innerHTML += "domena: " + domena + "</br>"

const parsedEmail = {
    userName: jmeno, 
    domain: domena,
}

document.body.innerHTML += `
<p>Jmeno: ${parsedEmail.userName}</h2> 
<p>Domena: ${parsedEmail.domain}</p> 
`

let ulice = prompt("Zadej ulici: ")
let cislo = prompt("Zadej cislo domu: ")
let mesto = prompt("Zadej mesto: ")
let psc = prompt("Zadej PSC: ")

let vysledekVlastnosti3 = document.getElementById('vysledekVlastnosti3')
vysledekVlastnosti3.innerHTML += "<p>" + ulice + " " + cislo + "</p>" 
vysledekVlastnosti3.innerHTML += `${psc} ${mesto}`
