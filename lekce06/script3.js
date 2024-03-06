const trojuhelnikovaParcela = (width, height) => {
    const parcela = (width * height) / 2
    document.body.innerHTML = parcela
    
    return parcela
}

function ctvercovaParcela(width, height) {
    const parcela = (width * height)
    
    return parcela
}

// const vysledek = trojuhelnikovaParcela(15, 7)
// const vysledek2 = trojuhelnikovaParcela(6, 17)
// const vysledek3 = trojuhelnikovaParcela(8, 8)

const vysledek = ctvercovaParcela(8, 9)
const vysledek2 = ctvercovaParcela(8, 12)

console.log(vysledek, vysledek2)

console.log((()=> {
    document.body.innerHTML = "Ahoj!"
    return "Jak se mas";
})());

const isSafePassword = (pass) => {
    if (pass.length >= 8) {
        return "Heslo je bezpečné"
    } else {
        return "Heslo je příliš krátké"
    }
}

const heslo = prompt("Zadej heslo")

console.log(isSafePassword(heslo))