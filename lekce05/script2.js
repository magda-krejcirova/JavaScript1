const odstavec = document.querySelector("#ods2") // ovliveni ID v CSS
const nadpis = document.querySelector(".nadpis")
const vek = Number(prompt("Zadej vek: "))
const popis = document.querySelector("#produkt p")


/* dalsi metody uz nepouzivam specialni znak na css, class,id aj.
document.getElementById("ods2")
document.getElementsByClassName(nadpis)
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
popis.textContent = "uzasny produkt pizza s ananasem"