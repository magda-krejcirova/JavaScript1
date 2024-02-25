document.body.innerHTML += "<H1>Ukol 02</H1>"
document.body.innerHTML += "<h2>FIT e-mail</h2>"

let jmeno = prompt("Zadej svoje krestni jmeno bez diakritiky: ")
let prijmeni = prompt("Zadej svoje prijmeni bez diakritiky: ")

jmeno = jmeno.trim().toLowerCase().slice(0,3)
prijmeni = prijmeni.trim().toLowerCase().slice(0,5)

const email = `
<H3>Tvuj email je:</H3> 
<p>${prijmeni}${jmeno}@fit.cvut.cz</p>
`

document.body.innerHTML += email