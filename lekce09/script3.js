// const objednavka = document.querySelector("form")

// objednavka.addEventListener("submit", (event) => {
//     event.preventDefault()
//     objednavka.innerHtml = `
//         <h1>Hotovo</h1>
//         <p>Objednávka odeslána ke zpracování.</p>`
// })

const formular = document.querySelector('form')
formular.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const platbaElm = document.querySelector("select")
    console.log(platbaElm.value)
   
    formular.innerHTML = `
      <h1>Hotovo</h1>
      <p>Objednávka odeslána ke zpracování.</p>`
})

const kartaTxt = document.querySelector("input")

kartaTxt.addEventListener("input", (event) => {
    const zpravaElm = document.querySelector("p")
    if (event.target.value.length === 16 ) {
        return }
    zpravaElm.textContent = "delka karty je nedostacuji"
    console.log(zpravaElm)
})

// const kartaElm=document.querySelector("input")
// kartaElm.addEventListener("change", (event) => {
//     if(event.target.value.length < 8) {
//         console.log(`Heslo je kratke, pripis ${8 - event.target.value.length}`)
//     } else {
//         console.log("Heslo je bezpecne")
//     }
// })

// Platební karta musí mít přesně 16 číslic. Pokud uživatel zadá méně nebo více, zobrazte pod formulářem chybovou hlášku. Pro hlášku si v HTML souboru připravte prvek <p>. Hlášku zobrazte s každým novým vstupem od uživatele (událost input na prvku <input>). Pokud je vše v pořádku, chybovou hlášku smažte.

// Pro příliš krátkou kartu použijte text „Číslo karty je příliš krátké. Chybí X číslic.“
// Pro příliš dlouhou kartu použijte text „Číslo karty je moc dlouhé. Přebývá X číslic.“
// Zkuste místo události input poslouchat na událost change. Jak se liší jejich chování? Která varianta je lepší? input nebo change?

