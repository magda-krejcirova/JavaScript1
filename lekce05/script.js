const produkt = document.querySelector("#produkt")

const kniha = {
    nazev: "Kral krysa",
    cena: 150,
    popis: "Valecne drama"
}

//* produkt.className = " " /* vymze nama nastavenou clasu v index.html */

produkt.classList.toggle("ramecek")

produkt.innerHTML = `
    <p class="nazev">${kniha.nazev}</p>
    <p>${kniha.popis}</p>
    <p>cena:${kniha.cena}</p>
`

