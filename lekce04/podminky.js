const vek = Number(prompt("Zadej vek"))
const naSklade = false

// > >= < <= == != === !==
if(vek >= 18) {
    document.body.innerHTML = "Vstup povolen!"

    const uzivJmeno = prompt("Zadej uzivatelske jmeno")
    const uzivHeslo = prompt("Zadej uzivatelske heslo")

    if(uzivHeslo === "heslo1") {
        document.body.innerHTML += `Vitej uzivateli ${uzivJmeno}`
    } else {
        document.body.innerHTML += `Spatne zadane heslo`
    }
} else {
    document.body.innerHTML = "Vstup zamitnut!"
}

const vek2 = "18"

// == ===
// lepsi podminka s === porovnana i datove typy tj. STring VS number
if(vek2 === 18) {
    console.log("prosla jsem se ===")
}

if(vek2 == 18) {
    console.log("prosla jsem se ==")
}

/// ternalni operator  ? X : X
const vek3 = Number(prompt("Zadej vek"))
const zprava = vek3 >= 18 ? "vstup povolen" : "vstup zamitnut"

console.log(zprava)

if(vek3 >= 18) {
    console.log("Vstup povolen")
} else {
    console.log("Vstup zamitnut")
}