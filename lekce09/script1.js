const elForm = document.querySelector("#registrace")
const elCheckbox = document.querySelector("#souhlas")
const elSelect = document.querySelector("#vyber")

//po kliknuti na odeslat, zobrazi info o tom, ze uzivatel (jmeno,prijmeni) byl zaregistrovan
elForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const jmenoTxt = document.querySelector("#jmeno")
    const prijmeniTxt = document.querySelector("#prijmeni")

    console.log(`${jmenoTxt}, ${jmenoTxt.value}`)

    alert(`Uzivatel ${jmenoTxt.value} ${prijmeniTxt.value} uspesne registrovan!`)
})

//vypisujeme stavy check boxu a vyberu zandru po kliknuti na submit
elForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(elCheckbox.value)
    console.log(elSelect.value)
})

const elHeslo = document.querySelector("#heslo")
// ZDE JE VYSVETLENO ROZDIL MEZI PARAMETREM I N P U T  A  C H A N G E (reaguje az po vyskoceni z policka)
/*elHeslo.addEventListener("input", (event) => {
    if(event.target.value.length < 8) {
        console.log(`Heslo je kratke, pripis ${8 - event.target.value.length}`)
    } else {
        console.log("Heslo je zabezpecene")
    }
})*/

elHeslo.addEventListener("change", (event) => {
    if(event.target.value.length < 8) {
        console.log(`Heslo je kratke, pripis ${8 - event.target.value.length}`)
    } else {
        console.log("Heslo je bezpecne")
    }
})