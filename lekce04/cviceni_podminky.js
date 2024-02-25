//Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
//Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
//Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

/*
let jmeno = prompt("Zadej jmeno: ") 
let vek = Number(prompt("Zadej vek: "))
let heslo = prompt("Zadej heslo: ") 

if (vek >= 65) {
    document.body.innerHTML += "Vek v poradku" + "</br>"
    if (heslo.length < 8) {
        document.body.innerHTML += "slabe heslo" + "</br>"
    } if ((heslo === "heslo123") && (heslo.length >= 8)){
        document.body.innerHTML += "vstup povolen" + "</br>"
    } else {
            document.body.innerHTML += "spatne heslo" + "</br>"    
        }
} else {
    document.body.innerHTML += "Nizky vek"
}
*/
// const zprava = vek >= 65 ? "věk v pořádku" : "nízký věk"
// document.body.innerHTML = zprava + "</br>"

// const zprava2 = ((heslo.length < 8) && vek >= 65) ? "slabé heslo" : ""
// document.body.innerHTML = zprava2 + "</br>"

let vek2 = Number(prompt("Zadej vek: "))
let plnaCena = 12

let cena = plnaCena * 0
if (vek2 > 64) {
    let cena = Math.round(plnaCena * 0.5)
    document.body.innerHTML += "Senior nad 64: " + cena + " Euro </br>" 
}   else if (vek2 > 27) {
        let cena = Math.round(plnaCena * 1)
        document.body.innerHTML += "Dospely mezi 27 az 64: " + cena + " Euro </br>" 
}   else if (vek2 > 6) {
        let cena = Math.round(plnaCena * 0.65)
        document.body.innerHTML += "Zak, student od 6 do 26: " + cena + " Euro </br>" 
}   else {
        document.body.innerHTML += "Navstevnik do 6 let: " + cena + " Euro </br>"
}       
