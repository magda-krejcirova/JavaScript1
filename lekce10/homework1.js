const ukol = document.querySelector("#vystup")
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
document.body.innerHTML += `<p> Vypište do stránky všechna čísla:</p>`
numbers.forEach((polozka) => {
  document.body.innerHTML +=`${polozka}, `
})

document.body.innerHTML += `<p> Vypište do stránky druhé mocniny všech čísel:</p>`
const mocniny = numbers.map((cislo) => {
  let vysledek = cislo * cislo
  return document.body.innerHTML += `${vysledek}, ` 
})

document.body.innerHTML += `<p> Vypište do stránky pouze záporná čísla:</p>`
const zaporna = numbers.map((cislo) => {
  return (cislo < 0) ? document.body.innerHTML += `${cislo}, `: ""
})

document.body.innerHTML += `<p> Vypište do stránky absolutní hodnotu všech čísel:</p>`
numbers.forEach((polozka) => {
  let vysledek = Math.abs(polozka)
  document.body.innerHTML +=`${vysledek}, `
})

document.body.innerHTML += `<p> Vypište do stránky pouze sudá čísla: </p>`
const sudy = numbers.map((cislo) => {
  return (cislo % 2 === 0) ? document.body.innerHTML += `${cislo}, `: ""
})

document.body.innerHTML += `<p> Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi: </p>`
const delit3 = numbers.map((cislo) => {
  let abs = Math.abs(cislo)
  return (abs % 3 === 0) ? document.body.innerHTML += `${cislo}, `: ""
})

document.body.innerHTML += `<p> Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5: </p>`
const vzdalenost = numbers.map((cislo) => {
  let delka = Math.abs(cislo - 5)
  return document.body.innerHTML += `${delka}, `
})

document.body.innerHTML += `<p> Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5: </p>`
const vzdalenostCtverecni = numbers.map((cislo) => {
  let delka = (cislo - 5) * (cislo - 5)
  return document.body.innerHTML += `${delka}, `
})

let counter = 0
document.body.innerHTML += `<p> Spočítejte, kolik je v seznamu záporných čísel: </p>`
numbers.forEach((polozka) => {
  if (polozka < 0) {counter++}
})
document.body.innerHTML +=`${counter} `

let sume = 0
document.body.innerHTML += `<p> Spočítejte součet všech čísel v poli: </p>`
numbers.forEach((polozka) => {
  sume = sume + polozka
})
document.body.innerHTML +=`${sume} `

document.body.innerHTML += `<p> Spočítejte průměr všech čísel v poli: </p>`
let average = numbers.length
average = sume / average
document.body.innerHTML +=`${average} `

let sumKlad = 0
document.body.innerHTML += `<p> Spočítejte součet všech kladných čísel v poli: </p>`
numbers.forEach((polozka) => {
  if (polozka > 0) {sumKlad+=polozka}
})
document.body.innerHTML +=`${sumKlad} `