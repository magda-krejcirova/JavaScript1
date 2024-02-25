// interpolace retezcu
const pizza = {
    nazev: "Hawaii",
    cena: 230,
    zaklad: "smetana",
    telefon: "4201423456789"
}

document.body.innerHTML = 
"<h2>" + pizza.nazev + "</h2>" 
+ "<p>Cena: " + pizza.cena + "Kc</p>" 
+ "<p>Zaklad: " + pizza.zaklad + "</p>" 

document.body.innerHTML += `
<h2>${pizza.nazev}</h2> 
<p>Cena: ${pizza.cena}</p> 
<p>Zaklad: ${pizza.zaklad}</p>
<p>Zaklad: ${pizza.telefon.padStart(14,"0")}</p>
`
