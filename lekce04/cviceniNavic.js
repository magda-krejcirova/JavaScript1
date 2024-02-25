document.body.innerHTML += "<H1>Dobrovolne Ukoly</H1>"
document.body.innerHTML += "<h2>Ruleta</h2>"

let cislo = Number(prompt("Zadej cislo z rulety: "))

if (cislo === 0) {
    document.body.innerHTML += "<p>nula</p>"
} else if ((cislo >= 1) && (cislo <= 10) || (cislo >= 19) && (cislo <= 28)) {
        if (cislo % 2 === 0) {
        document.body.innerHTML += "<p>cerna suda</p>"
        } else {
        document.body.innerHTML += "<p>cervena licha</p>"
    }
} else if (cislo % 2 === 0) {
        document.body.innerHTML += "<p>cervena suda</p>"
} else {
        document.body.innerHTML += "<p>cerna licha</p>"
}

document.body.innerHTML += "<h2>Prestupny rok</h2>"

let rok = Number(prompt("Zadej letopocet: "))

if (((rok % 4 === 0) && (rok % 100 != 0)) || ((rok % 100 === 0) && (rok % 400 === 0))) {
    document.body.innerHTML += "<p>" + rok + " je prestupny rok"
    } else {
        document.body.innerHTML += "<p>" + rok + " neni prestupny rok"
    }

// Reseni pomoci ternalniho operatoru
const zprava = rok >= (((rok % 4 === 0) && (rok % 100 != 0)) || ((rok % 100 === 0) && (rok % 400 === 0))) ? "je prestupny rok" : "neni prestupny rok"
document.body.innerHTML += zprava
