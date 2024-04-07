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
numbers.forEach((polozka) => {
  const even = polozka => (polozka % 2 === 0) ? document.body.innerHTML +=`${even}, ` : " "
  })



// jmena.forEach((polozka) => { 
//   document.body.innerHTML += `<p>${polozka}@czechitas.cz</p>`
// })



// const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
// const zvirata = [
//   'pes',
//   'kočka',
//   'králík',
//   'had',
//   'andulka',
//   'morče',
//   'krkavec',
// ];
// const napoje = [
//   { nazev: 'Pivo', cena: 12, skladem: true },
//   { nazev: 'Rum', cena: 120, skladem: false },
//   { nazev: 'Víno', cena: 85, skladem: true },
//   { nazev: 'Whisky', cena: 450, skladem: true },
//   { nazev: 'Vodka', cena: 280, skladem: false },
//   { nazev: 'Becherovka', cena: 210, skladem: true },
//   { nazev: 'Kofola', cena: 40, skladem: true },
//   { nazev: 'Voda', cena: 15, skladem: false },
// ];

// const dvojnasobek = cisla.map((cislo) => {
//     return cislo * 2
// })
// console.log(dvojnasobek)

// const delkyZvirat = zvirata.map((zvire) => {
//     return zvire.length
// })
// console.log(delkyZvirat)

// const jenNapoje = napoje.map((napoj) => {
//     return napoj.nazev
// })
// console.log(jenNapoje)

// const jeSkladem = napoje.map((sklad) => {
//     if (sklad.skladem) {return sklad.nazev}
//     else return "Neni skladem"
// })
// console.log(jeSkladem)