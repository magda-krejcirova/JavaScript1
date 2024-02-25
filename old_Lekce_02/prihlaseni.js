let uzivatelskeJmeno = prompt("Zadej uzivatelske jmeno")
if(uzivatelskeJmeno === "krakonos") {
    document.body.innerHTML = "Uzivatelske jmeno je spravne"
    let uzivatelskeHeslo = prompt("Zadej uzivatelske heslo")
    if(uzivatelskeHeslo === "sojka") {
        document.body.innerHTML = "Uzivatelske heslo je spravne"
    } else {document.body.innerHTML = "Uzivatelske heslo je nespravne"}
    } else {
    document.body.innerHTML = "Uzivatelske jmeno je nespravne"
}
