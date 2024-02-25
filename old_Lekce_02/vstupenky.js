let vek = Number(prompt("Napis vek"))
let plnaCena = 12

if(vek < 6) {
    document.body.innerHTML = plnaCena * 0 + " euro pro návštěvníky mladší 6 let"
    } else if(vek >=6 && vek < 26) {
    document.body.innerHTML += Math.round(plnaCena * 0.65) + " euro pro návštěvníky 6 až 26 let (žák, student)"
        } else if (vek >=27 && vek < 64) {
    document.body.innerHTML += Math.round(plnaCena * 1) + " euro pro návštěvníky 27 až 64 let (dospělý)"
        }
            else {
            document.body.innerHTML += Math.round(plnaCena * 0.5) + " euro pro ostatní (senior)"
            }