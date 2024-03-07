//////////////////////////Prevod meny
const convertToCZK = (mnozstvi, mena) => {
    let koruna = null
    if (mena === "EUR") {
        return koruna = Math.round(mnozstvi * 24.47)
    } else if (mena === "GBP"){
        return koruna = Math.round(mnozstvi * 28.09)
    } else if (mena === "USD"){
       return koruna = Math.round(mnozstvi * 24,81)
    } else if (mena === "BTC"){
        return koruna = Math.round(mnozstvi * 478637)
    } else return koruna
}

document.body.innerHTML += convertToCZK(25, 'EUR') + '<br>'
document.body.innerHTML += convertToCZK(25, 'GBP') + '<br>'
document.body.innerHTML += convertToCZK(25, 'USD') + '<br>'
document.body.innerHTML += convertToCZK(25, 'BTC') + '<br>'
document.body.innerHTML += convertToCZK(25, 'BKV') + '<br>'
////////////////////////// CVICENI VYPLNOREZ
const fillCut = (str, len) => {
    if (str.length > len) {
        return str.slice(0,len)
    } else if (str.length < len) {
        return str.padStart(len,".")
    } else { 
        return str
    }

}

document.body.innerHTML += fillCut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillCut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillCut('petr', 4) + '<br>'; // vypíše „petr“