const hesloDatabaze = "SuperTajneHeslo123"
let hesloUzivatele = prompt("Zadej heslo")
let pocetPokusu = 0

while(hesloDatabaze !== hesloUzivatele && pocetPokusu < 5) {
    hesloUzivatele = prompt("Spatne zadane heslo, zkus to znovu")
    pocetPokusu++
}

console.log("Prihlasen")