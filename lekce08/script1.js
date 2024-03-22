const odmena = (pocetLet) => {
    if(pocetLet < 5) {
        return 1000
    } else if(pocetLet < 10) {
        return 3000
    } else if(pocetLet < 15) {
        return 5000
    } else {
        return 10000
    }
}

const uzivHodinovka = 300

const plat = (hodinovka, pocetHodin, pocetLet) => {
    return hodinovka * pocetHodin + odmena(pocetLet)
}

const plat2 = (hodinovka, pocetHodin, pocetLet, fceOdmena) => {  // proc je to tak resene: prehlednost kodu, a nekdy 
    console.log(fceOdmena)                                      // by tento zapis nebyl akcepotovatelne (callbackfunction)
    return hodinovka * pocetHodin + fceOdmena(pocetLet)         // fceOdmena = posle jako argument = fceOdmena(pocetLet)
}

console.log(plat(uzivHodinovka, 160, 3))
console.log(plat2(uzivHodinovka, 160, 3, odmena))
console.log(odmena)

const plus = (num1, num2) => {
    return num1 + num2
}
const minus = (num1, num2) => {
    return num1 - num2
}
const times = (num1, num2) => {
    return num1 * num2
}
const divide = (num1, num2) => {
    return num1 / num2
}

const calc = (num1, op, num2, plus, minus, times, divide) => {
    if (op === '+') {
        return plus(num1, num2)
    }
    if (op === '-') {
        return minus(num1, num2)
    }
    if (op === '*') {
        return times(num1, num2)
    }
    if (op === '/') {
        return divide(num1, num2)
    }
  
    return null;
};

console.log(calc(10, "+", 10, plus, minus, times, divide))

const zprava = () => {
    console.log("Ubehlo 5 sekund")
}

const zprava2 = () => {
    console.log("Kazde tri sekundy vypisuji zpravu")
}

setTimeout(zprava, 5000)
setInterval(zprava2, 3000)


const zprava2 = () => {
    console.log("Kazde tri sekundy vypisuji zpravu")
}

setInterval(zprava2, 3000)

setTimeout(() => {console.log("Ubehlo 5 sekund")}, 5000)

let minutes = 0
let seconds = 0

setInterval(() => {
    const time = document.querySelector("#time")

    time.innerHTML = `${minutes}:${seconds}`

    if(seconds === 60) {
        minutes++
        seconds = 0
    }

    seconds++
}, 1000)

const text = document.querySelector("#text")
const btn = document.querySelector("#btn")
let clickCount = 0
let zprava

btn.addEventListener("click", () => {
    if(clickCount < 10) {
        zprava = `Parada, kliknul jsi na me celkem ${clickCount}`
    } else if(clickCount < 30) {
        zprava = `Nejsi nervozni, kliknul jsi na me celkem ${clickCount}`
    } else {
        zprava = `To uz prestava byt sranda, kamo. Kliknul jsi na me celkem ${clickCount}`
    }

    text.classList.toggle("modre-pozadi")

    text.textContent = zprava
    clickCount++
})