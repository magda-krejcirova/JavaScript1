// const = isTomorrow = require('dayjs/plugin/isTomorrow')

// dayjs.extend(isTomorrow)

// dayjs().add(1, 'day').isTomorrow()
let elementZprava = document.getElementById('msg')

const vikend = dayjs().format("dddd")
console.log (vikend)

if (vikend === "Saturday" || vikend === "Sunday") {
    elementZprava.classList.add("msg--valid")
    elementZprava.innerHTML += "<h1>uz je vikend</h1>"
} else {
    elementZprava.classList.add("msg--invalid")
    elementZprava.innerHTML += "<h1>jeste makej</h1>"
}

