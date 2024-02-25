/*
let vek = Number(prompt(("Napis mi vek", "20"))) // "20" => 20

document.body.innerHTML = vek + 10

let cislo=100
let cisloText = String(cislo)

let vek = 18 // < <= > => === !==

if(vek >= 18) {
    document.body.innerHTML = "Muzes vstoupit"
} else {
    document.body.innerHTML = "Az za par let kamarade"
}

let heslo = "SuperTAjneHeslo"
// == != nepouzivat protoze smicha ruzne typy ..... "10" = 10 pravda
if(heslo === "SuperTajneHeslo123") {
    document.body.innerHTML = "Vitej"
} else {
    document.body.innerHTML = "Pristup zamitnut, spatne heslo"
}

let cislo = "10"
// === !==

// "10" == 10
// String == Number
if(cislo === 10) {
    document.body.innerHTML = "pravda"
} else {
    document.body.innerHTML = "nepravda"
}

let znamka = 3

if(znamka === 1) {
    document.body.innerHTML = "vyborny"
} else if(znamka === 2) {

} else if(znamka === 3) {

} else if(znamka === 4) {

} else if(znamka === 5) {

} else {
    // spatne zadana hodnota
}

// tento zapis je neefektivni, zatizi pocitac, protoze musi projit vsemi 6 radky v predchozim prikladu, zastavi u nejake podminky
if(znamka === 1) {

}

if(znamka === 2) {
    
}

// 2, 3, 4.3, 4.5, 5, 20, 24

let stupne = [2, 3, 4.3, 4.5, 5, 20, 24] // pole
//            0  1   2    3   4   5   6

document.body.innerHTML += "<p>" + stupne[7] + "</p>"

stupne.push(20) // [2, 3, 4.3, 4.5, 5, 20, 24, 20] 

document.body.innerHTML += "<p>" + stupne[7] + "</p>"

document.body.innerHTML += stupne.length


// pole a objekty

// 2, 3, 4.3, 4.5, 5, 20, 24
// Hawaii, 215, true, true

let pizza = {
    nazev: "Hawaii",
    cena: 215, 
    rozvoz: true, 
    vRestauraci: true
}

pizza.nazev = "Salami"

document.body.innerHTML = pizza.nazev

let pizzerie = [
    { // 0
        nazev: "Hawaii",
        cena: 215, 
        rozvoz: true, 
        vRestauraci: true
    },
    { // 1
        nazev: "Salami",
        cena: 300, 
        rozvoz: true, 
        vRestauraci: true
    }
]

document.body.innerHTML = pizzerie[1].cena

*/

let znamky = [1, 3, 4, 2, 1, 1, 2, 3, 6, 1, 50]
let pocitadlo = 0

for(let i = 0; i < 10; i++) {
    document.body.innerHTML += i + "</br>"
}

for(let z of znamky) {
    if(pocitadlo === 10) {
        break
    }

    if(z === 1) {
        document.body.innerHTML += z + ": vyborny </br>"
    } else if(z === 2) {
        document.body.innerHTML += z + ": chvalitebny</br>"
    } else if(z === 3) {
        document.body.innerHTML += z + ": dobry</br>"
    } else if(z === 4) {
        document.body.innerHTML += z + ": dostatecny</br>"
    } else if(z === 5) {
        document.body.innerHTML += z + ": nedostatecny</br>"
    } else {
        document.body.innerHTML += "Hodnota musi byt mezi 1 - 5</br>"
    }

    pocitadlo = pocitadlo + 1
}

const vydaje = [
    { jmeno: 'Petr', zbozi: 'Prací prášek', utrata: 240 },
    { jmeno: 'Ondra', zbozi: 'Savo', utrata: 80 },
    { jmeno: 'Pavla', zbozi: 'Toaleťák', utrata: 65 },
    { jmeno: 'Zuzka', zbozi: 'Mýdlo', utrata: 50 },
    { jmeno: 'Pavla', zbozi: 'Závěs do koupelny', utrata: 350 },
    { jmeno: 'Libor', zbozi: 'Pivka na kolaudačku', utrata: 124 },
    { jmeno: 'Petr', zbozi: 'Pytle na odpadky', utrata: 75 },
    { jmeno: 'Míša', zbozi: 'Utěrky na nádobí', utrata: 130 },
    { jmeno: 'Ondra', zbozi: 'Toaleťák', utrata: 120 },
    { jmeno: 'Míša', zbozi: 'Pečící papír', utrata: 30 },
    { jmeno: 'Zuzka', zbozi: 'Savo', utrata: 80 },
    { jmeno: 'Petr', zbozi: 'Tapeta na záchod', utrata: 315 },
    { jmeno: 'Ondra', zbozi: 'Toaleťák', utrata: 6 },
]

for(let polozka of vydaje) {
    if(polozka.jmeno === "Petr") {
        document.body.innerHTML += polozka.zbozi + "</br>"
    }
}

for(let polozka of vydaje) {
    document.body.innerHTML += polozka.jmeno + "</br>"
}