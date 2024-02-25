let wageInEur = 20
let kurz = 26.58
let wageInCz = Math.round(wageInEur*kurz)
document.body.innerHTML = "<h1>Vyplata v CZK: " + wageInCz + " Kč</h1>"

let start = 15
let delka = 15
let konec = (start + delka)%24

document.body.innerHTML += "Zavod skonci v " + konec




