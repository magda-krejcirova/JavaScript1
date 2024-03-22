const vyst1 = document.querySelector("#nabidka1")
const vyst2 = document.querySelector("#nabidka2")
const vyst3 = document.querySelector("#nabidka3")

const justFood = (udalost, counter) => {
    let cena = 150
    cena *= counter
    cena = cena.toLocaleString() // toto by melo jit nejak zoptimalizovat, ale neni cas
    return `${udalost} catering od Just Food pro ${counter} lidi za ${cena} Kc`
}

const yourMama = (udalost, counter) => {
    let cena = 300
    cena *= counter
    cena = cena.toLocaleString()
    return `${udalost} catering od Your Mama pro ${counter} lidi za ${cena} Kc`
}

const flavourHaven = (udalost, counter) => {
    let cena = 500
    cena *= counter
    cena = cena.toLocaleString()
    return `${udalost} catering od Your Mama pro ${counter} lidi za ${cena} Kc`
} 

const createEvent = (oslava, pocet, fcefirma) => {
    return fcefirma(oslava, pocet)
}

vyst1.textContent = createEvent("Slavime 100 let s ...", 200, justFood)
vyst2.textContent = createEvent("Sraz absolventu", 100, yourMama)
vyst3.textContent = createEvent("Svatba pana a pani Smith", 50, flavourHaven)
//vyst1.textContent += createEvent("Nikdo neprisel", 1, X)

