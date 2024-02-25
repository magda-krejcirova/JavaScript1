document.body.innerHTML += "<H1>Výplata</H1>"
let hodinDenne = 7
let hodinMzda = 320
const mesic = 21
let mesicniMzda = (hodinDenne * hodinMzda * mesic)
document.body.innerHTML += "Mesicni prijem je:" + mesicniMzda + " Kč"
let celkovaDan = mesicniMzda * 0.40 * 0.15

document.body.innerHTML += "OSVC dan:" + Math.round(celkovaDan) + " Kč"

document.body.innerHTML += "<H1>Délka filmu</H1>"
let delkaFilmu = 223
let hodiny = Math.floor(delkaFilmu/60)
let minuty = delkaFilmu % 60
document.body.innerHTML += "Delka filmu je:" + hodiny + " hodiny a " + minuty + " minut."

document.body.innerHTML += "<H1>E-mail</H1>"
let jmeno = "Magda"
let tecka = "."
let prijmeni = "Krejcirova"
const koncovka = "@mujmail.com"
document.body.innerHTML += jmeno + tecka + prijmeni + koncovka

document.body.innerHTML += "<H1>Nahodne cisla</H1>"
document.body.innerHTML += Math.round(Math.random()*10)

document.body.innerHTML += "<H1>Prevod meny</H1>"
let wageInEur = 20
const kurz = 24.55
var wageInCzk = Math.round(20 * 24.55)
document.body.innerHTML += "<H1>Mzda v korunach: " + wageInCzk +"</H1>"

document.body.innerHTML += "<H1>Ultramaraton</H1>"
let start = 15
let delka = 14
let konec = (start + delka)-24
document.body.innerHTML += "bezec dobehne v: " + konec + " hodin."
