document.body.innerHTML += "<H1>Vstupy a Vystupy</H1>"

const jmeno = prompt("Zadej jmeno: ")
const prijmeni = prompt("Zadej prijmeni:")
const vek = Number(prompt("Zadej Vek"))

document.body.innerHTML += jmeno + " " + prijmeni + ", vek: " + vek 

document.body.innerHTML += "<H1>Vyplata jako stranka</H1>"

const hodinovka = Number(prompt("Zadej hodinovou sazbu v Kc: "))
const hodinDenne = Number(prompt("Zadej pocet odpacovanych hodin denne: "))
const pocetDni = Number(prompt("Zadej pocet pracovnich dnu: "))

document.body.innerHTML += "<p> Celkova mzda je " + (hodinovka * hodinDenne * pocetDni) + "</p>"

