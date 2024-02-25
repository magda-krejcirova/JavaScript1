// alert("Hello world!") // toto je komentar na jednom radku

    document.body.innerHTML = "<h2>Hello \* world<h2>"
    document.body.innerHTML += 10 + 10
    document.body.innerHTML += 3 % 2
    document.body.innerHTML += "<h1>" + 10 + 10 + "<h1>"
    document.body.innerHTML += "<h1>" + (10 + 10) + "<h1>"
    document.body.innerHTML += "Magda" + " Krejcirova\n"
    document.body.innerHTML += "Magda" + " Krejcirova </p>"
    document.body.innerHTML += Math.round(102.56)

    //document.body.innerHTML += "Magda" + " Krejcirova \n"
    //document.body.innerHTML += Math.random()

    //var jmeno = "Magda Krejcirova" //uz se nepouziva, je to bezpecnostne zastarale
    
    let vek = 30
    const mesto = "Brno"

    vek = 31
    document.body.innerHTML += vek
    
    let pocetHodin = 160
    let hodinovka = 5000
    let plat = pocetHodin * hodinovka // 160 * 5000 = 800 000

    hodinovka = 10000

    plat = pocetHodin * hodinovka

    document.body.innerHTML = plat
    

    let vek2 = promt("Napis mi vek", "20")
    prompt("Jak se jmenujes:")
    document.body.innerHTML += "Vitej uzivateli, vek: " + vek2
