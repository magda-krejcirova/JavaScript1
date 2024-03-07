function kontrolujVek(vek) {
    if(vek >= 18) {
        console.log("Dospelak")
    } else {
        console.log("Dite")
    }
}

const kontrolujVek2 = (vek) => {
    if(vek >= 18) {
        return "Dospelak"
    } else {
        return "Dite"
    }
}

const kontrolujVek3 = (vek) => {return vek >= 18 ? "Dospelak" : "Dite"} // zkracenejsi zpusob zapisu
const kontrolujVek4 = vek => vek >= 18 ? "Dospelak" : "Dite" // nejkratsi zpusob zapisu

const vek = kontrolujVek2(20)

console.log(kontrolujVek2(30))
console.log(kontrolujVek2)

document.body.innerHTML = `Vek: ${kontrolujVek2(40)}`