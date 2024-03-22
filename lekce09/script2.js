const formElm = document.querySelector("#newsLetter")
console.log(formElm)
formElm.addEventListener("submit", (event) => {
    const emailTxt = document.querySelector("#email")
    console.log(emailTxt)
    formElm.textContent = `Děkujeme za váš zájem. 
    Těšte se na novinky ze světa frontendu a UX na vaší adrese 
    ${emailTxt.value}`    
})




// const elForm = document.querySelector("#registrace")

// elForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const jmenoTxt = document.querySelector("#jmeno")
//     const prijmeniTxt = document.querySelector("#prijmeni")

//     console.log(`${jmenoTxt}, ${jmenoTxt.value}`)

//     alert(`Uzivatel ${jmenoTxt.value} ${prijmeniTxt.value} uspesne registrovan!`)
// })
