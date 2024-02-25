const odstavec = document.querySelector("#ods2") // ovliveni ID v CSS
const nadpis = document.querySelector(".nadpis")
const vek = Number(prompt("Zadej vek: "))
const popis = document.querySelector("#produkt p")
const obrazek = document.querySelector("img")

obrazek.src = "https://www.pesweb.cz/img/_/_kocka.1813.foto/img_7774.jpg"
obrazek.style.width = "300px"
/* dalsi metody
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
*/
if (vek >= 18) {
    odstavec.textContent = "Vitej na strance"
    odstavec.classList.add("zelena")
    nadpis.style.color = "green"
} else {
    odstavec.textContent = "Pristup zamitnut"
    odstavec.classList.add("cervena")
    nadpis.style.color = "red"
}    

console.log(odstavec)
// dalsi methody
// odstavec.classList.remove ("cervena") - odebirani tridy
popis.textContent = "uzasny produkt pizza s anansem"