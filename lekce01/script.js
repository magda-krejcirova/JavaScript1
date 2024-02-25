document.body.innerHTML = "Hello world1!"
document.body.innerHTML += "<H1>Hello world2!</H1>"
console.log("Hello world3") // text na tajnacko, jen pro vyvojare uvidi v inspect na zalozce Console, neni urceno uzivateli
console.log(12.3 + 5)

console.log(12 - 5)

console.log((12 * 5) + 10)

console.log(12 / 5)

console.log(12 % 5)

document.body.innerHTML += "Magda " + "Krejcirova"

let jmeno = "Magda" //string
const vek = 39 //number
var jeLektor = true //boolean ale VAR uz se nepouziva ... zastarale

jmeno = "Margot"
vek = 40 // nahlasi v console chybu, protoze prepisujeme constantu
console.log(jmeno + "Robie")
console.log(vek)
console.log(jeLektor)