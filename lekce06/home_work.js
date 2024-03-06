const kontrola = document.querySelector("#kontrola")
const zadani = document.querySelector("#zadani")
// tady zacina funkce
const maxZeTri = (num1, num2, num3) => {
    const vysledek = document.querySelector("#vysledek")
    let max = num1
    if (num2 >= num1) {
        max = num2
        } 

    if (num3 > max) {
            max = num3
    }
    vysledek.innerHTML += `Max cislo je: ${max}`
} 

const number1 = Number(prompt("Zadej prvni cislo: "))
const number2 = Number(prompt("Zadej druhe cislo: "))
const number3 = Number(prompt("Zadej treti cislo: "))

zadani.innerHTML += `Cisla jsou: ${number1} ${number2} ${number3}`

maxZeTri(number1, number2, number3)
kontrola.innerHTML = Math.max(number1, number2, number3)




