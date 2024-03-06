const email = "magda.krejcirova@seznam.cz"
console.log(validator.isEmail(email))

const card = "4125010001000208"
console.log(validator.isCreditCard(card))

const email1 = prompt("Zadej svuj email")

let elementZprava = document.getElementById('msg')

if (validator.isEmail(email1)) {

    elementZprava.innerHTML = "<strong> Tento email " + email1 + " je validní </strong>"
    elementZprava.classList.add("msg--valid")
} else {
    elementZprava.innerHTML = "<strong> Tento email " + email1 + " není validní </strong>"
    elementZprava.classList.add("msg--invalid")
}
