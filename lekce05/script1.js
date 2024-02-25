const odstavec = document.querySelector("p")
//const odstavce = document.querySelectorAll("p") zohlednuje vsechny odstavce <p>
const vek = Number(prompt("Zadej vek: "))

if (vek >= 18) {
    odstavec.textContent = "Vitej na strance" //zmenime obsah odstavce textContent
    odstavec.style.backgroundColor = "green"
    odstavec.style.text = "white"
} else {
    odstavec.textContent = "Pristup zamitnut" //zmenime obsah odstavce textContent
    odstavec.style.backgroundColor = "red"
    odstavec.style.text = "white"
}

console.log(odstavec)
//console.log(odstavce)

//odstavec.style.color = "gold"
//odstavec.style.backgroundColor = "red" // v CSS se zapisuje backgroud-color
