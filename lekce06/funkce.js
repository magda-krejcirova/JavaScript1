const round = (number) => {
    let predCarkou = Number(number.slice(0,number.indexOf(".")))
    let zaCarkou = Number(number.slice(number.indexOf(".")+1, number.lenght))
    if (zaCarkou < 5) {
        document.body.innerHTML += "<p>" + number + "zaokrouhlene dle Python je" + predCarkou + "</p>"
        return
    } else if (zaCarkou > 5) {
        predCarkou = predCarkou + 1
        document.body.innerHTML += "<p>" + number + "zaokrouhlene dle Python je" + predCarkou + "</p>"
        return
    } else {
        if (predCarkou % 2 !== 0) {predCarkou = predCarkou + 1}
        document.body.innerHTML += "<p>" + number + "zaokrouhlene dle Python je" + predCarkou + "</p>"
        return
    }
}

const number = prompt("Zadej cislo, zaokrouhlim ho ala Python:) ")
round(number)

//////////////////////////////////////////////
const ellipseArea = (height, width) => {
    let plocha = (((height * width) / 4) * Math.PI)
}
console.log(ellipseArea(1, 2))
console.log(ellipseArea(2, 2))
console.log(ellipseArea(3, 2))

/////////////////////////////////////////////////
const maxZeDvou = (number1, number2) => {
    if (number1 > number2) {
        document.body.innerHTML += "<p> cislo: " + number1 + " je vetsi </p>"
        return number1
    } else if (number1 < number2) {
        document.body.innerHTML += "<p> cislo: " + number2 + " je vetsi </p>"
        return number2
    } else {
        return false
    }
}

console.log(maxZeDvou(2, 4))
console.log(maxZeDvou(10, 4))
console.log(maxZeDvou(4, 4))

// funkce na kontrolu DIC
const isDic = (inputStr) => {
    let prefix = inputStr.slice(0, 1)
    let digits = inputStr.slice(2, inputStr.lenght)

    if ((inputStr.lenght < 11) && (inputStr.lenght > 12)) {
        return false
    } else if (prefix !== "CZ") {
        return false
    } else if (!validator.isInt(digits)) {
        return false
    } else {
        return true
    }
}

const dic = prompt("zadej dic: ")
console.log(isDic(dic))

// Funkce parce date z formatu DD.MM.YYYY
const parseDate = (inputDate) => {
    let day = inputDate.slice(0, 2)
    let year = inputDate.slice(6, 10)
    let month = inputDate.slice(3, 5)
    document.body.innerHTML += `day: ${day}, month: ${month}, year: ${year}`
    return
}
const inputDate = prompt("zadej datum ve tvaru DD.MM.YYYY: ")
parseDate(inputDate)

// Funkce prevodu z dlouheho formatu na DD.MM.YYYY
const formatDate = (datumStr) => {
    let day1 = datumStr.trim(datumStr.slice(datumStr.indexOf("day:") + 4, datumStr.indexOf(", month:")))
    let month1 = datumStr.trim(datumStr.slice((datumStr.indexOf(", month:") + 6), (datumStr.indexOf(", year:"))))
    let year1 = datumStr.trim(datumStr.slice((datumStr.indexOf(", year:") + 8), (datumStr.indexOf(", year:") + 12)))
    day1 = day1.padStar(2,"0")
    month1 = month1.padStar(2,"0")
    document.body.innerHTML += `${day}.${month}.${year}`
    return
}

const inputDate1 = prompt("{ day: 6, month: 4, year: 2021 }")
formatDate(inputDate1)

//document.body.innerHTML += formatDate({ day: 6, month: 4, year: 2021 })

