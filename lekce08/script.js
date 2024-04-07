const buttonElm = document.querySelector("#button-order")

setTimeout(() => {
    buttonElm.textContent = "Objednat"
    buttonElm.disabled = false
}, 4000)

buttonElm.addEventListener("click", () => {buttonElm.textContent = "Objednano"})

// // buttonElm.addEventListener("click", () => {
// //     buttonElm.textContent = "Kontroluji dostupnost ..."

// })

//buttonElm.addEventListener("click", () => {document.body.innerHTML += `<p> Objednano </p>`})
//buttonElm.addEventListener("click", () => {buttonElm.textContent = "Objednano"})


// setInterval(() => {
//     buttonElm.textContent = "Kontroluji dostupnost....", 8000}  )

// const buttonElm = document.querySelector("#button-order")

// buttonElm.addEventListener("click", () => {
//     buttonElm.textContent = "Objednano"
// })
