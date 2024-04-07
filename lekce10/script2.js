const pocetDivaku = [100, 120, 200]
console.log(`puvodni pole ${pocetDivaku}`)
pocetDivaku.push(400)
console.log(`Nove pole ${pocetDivaku}`)

const zaplnenost = [80, 120, 60, 180]
console.log(`puvodni pole ${zaplnenost}`)
console.log(zaplnenost.pop())
console.log(`Nove pole ${zaplnenost}`)

const plays = ["Kocka na rozpalene strese", "Molier", "Cekani na Godota"]
const druhaHra = plays[1]
console.log(druhaHra)

const reviews = [
    {cas: "cas1", hodnoceni: 2},
    {cas: "cas2", hodnoceni: 9},
    {cas: "cas3", hodnoceni: 5},
    {cas: "cas4", hodnoceni: 6}
]

const first = (znak) => {
    znak.forEach(polozka => {
        if polozka
    });
}

jmena.forEach((polozka) => { 
    document.body.innerHTML += `<p>${polozka}@czechitas.cz</p>`
})
first([3, 2, 1])
first([])

const poleCisel = [5, 7, 9, 10]
const first = ([pole]) => {
    const vratPrvniPrvek = pole[0]
    return vratPrvniPrvek
}
console.log(first([1, 5, 9]))
console.log(first(poleCisel))