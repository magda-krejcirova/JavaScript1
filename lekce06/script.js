// console.log(validator.isEmail("magda.krejcirova@sen.com"))

// const card = "4125010001000208"
// console.log(validator.isCreditCard(card))

// const emailElm = document.querySelector("p")
// const email = prompt("zadej email")
// const isEmail = validator.isEmail(email)
// if (isEmail) {
//     emailElm.textContent = "E-mail v pořádku"
//     emailElm.classList.add("msg--valid")
// } else {
//     emailElm.textContent = "Neplatný e-mail"
//     emailElm.classList.add("msg--invalid")
// }

// kontrola spravnosti DIC

const isDIC = (inputStr) => {
    if (inputStr.length < 11) {
        return false
    }

    if (inputStr.length > 12) {
        return false
    }

    const prefix = inputStr.slice(0,2)
    if (prefix !== "CZ") {
        return false
    }

    const digits = inputStr.slice(2,inputStr.length)
    if (!validator.isInt(digits)) {
        return false
    }
return true
}
console.log(isDIC("CZ123456789"))
console.log(isDIC("CZ1234567890"))
console.log(isDIC("123"))
console.log(isDIC("ABC"))
console.log(isDIC("1234567890"))
console.log(isDIC("1234567890CZ"))
console.log(isDIC("CZ12345678901"))
console.log(isDIC("CZ1324567"))
console.log(isDIC("CZA12345678"))
