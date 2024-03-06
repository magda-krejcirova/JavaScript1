const email = prompt("Zadej email")

console.log("Validni email?", validator.isEmail(email))

//const dnes = dayjs().format("DD.MM.YYYY")
const dnes = dayjs()

console.log(dnes)

const stredryDen = dayjs("2024-12-24")
const silvestr = dayjs("2024-12-31")

if (silvestr.isAfter(stedryDen)) {
    console.log("Dnešek je po letošním štědrém dnu")
} else {
    console.log("Štěrdý den ještě nebyl.")
}

const isLeapYear = window.dayjs_plugin_isLeapYear
dayjs.extend(isLeapYear)

console.log("Je letos přestupný rok?", dnes.isLeapYear())