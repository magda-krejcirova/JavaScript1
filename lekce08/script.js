setInterval(() => {
    buttonElm.textContent = "Kontroluji dostupnost....", 8000}  )

const buttonElm = document.querySelector("#button-order")

buttonElm.addEventListener("click", () => {
    buttonElm.textContent = "Objednano"
})
