let hodinovka = Number(prompt("Uvedne svoji hodinovou sazbu:"))

let vyplata = hodinovka * 8 * 21

document.body.innerHTML += "Tvoj mesicni hruba vyplata je " + vyplata + " pri 8 hod za 21 dni </p>" 

let hodinovka1 = Number(prompt("Uvedne svoji hodinovou sazbu:"))
let denneHodin = Number(prompt("Uvedne kolik hodin denne pracujes:"))
let dnuMesici = Number(prompt("Uvedne pocet pracovnich dnu v mesici:"))
let vyplata1 = hodinovka1 * denneHodin * dnuMesici

document.body.innerHTML += "Tvoj mesicni hruba vyplata je " + vyplata1 + " paklize pracujes " + denneHodin + " hodin a " + dnuMesici + " dnu v mesici pri hodinove sazbe:" + hodinovka1 + "</p>"