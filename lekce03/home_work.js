document.body.innerHTML += "<H1>Ukol 01</H1>"
document.body.innerHTML += "<h2>Fahrenheit vs. Celsius</h2>"

const stupFahren = Number(prompt("Zadej hodnotu ve stupnich Fahrenheita: "))
//const zaokrouhleni = Number(prompt("Na kolik desetinnych mist zaokrouhlit?:"))
const stupCeslia = Math.round(5 * (stupFahren - 32) / 9)

document.body.innerHTML += "<p>" + stupFahren + " stupnu F je ve stupnich Celsia: " + stupCeslia + "</p>"

const stupCeslia2 = Number(prompt("Zadej hodnotu ve stupnich Celsia: "))
const stupFahren2 = Math.round((9 * stupCeslia2)/5 + 32)

document.body.innerHTML += "<p>" + stupCeslia2 + " stupnu C je ve stupnich F: " + stupFahren2 + "</p>"

