selectAnswer = (event) => {
    event.target.classList.toggle("ramecek")
    console.log(event)
}

document.querySelector("#a1").addEventListener("click", selectAnswer)
document.querySelector("#a2").addEventListener("click", selectAnswer)
document.querySelector("#a3").addEventListener("click", selectAnswer)

const text = document.querySelector("#text1")
console.log(text)
text.addEventListener("click", () => {
    alert("klikl jsi na text1")
})

document.querySelector("#text2").addEventListener("click", () => {
    alert("klikl jsi na text2")
})

clickAnswer = () => {alert("klikl jsi na text3")}
document.querySelector("#text3").addEventListener("click", clickAnswer)