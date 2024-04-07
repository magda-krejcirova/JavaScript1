const submitElm = document.querySelector("#newsLetter")

submitElm.addEventListener("submit", () => {
    const emailTxt = document.querySelector("#email")
    submitElm.textContent = `Děkujeme za váš zájem. 
         Těšte se na novinky ze světa frontendu a UX na vaší adrese 
         ${emailTxt.value}`    
})
////////////////////////////////////////////////////
// const formular = document.querySelector('#newsLetter')

// const odebirat = (event) => {
// 	event.preventDefault()
// 	const input = document.querySelector('#email')
// 	const email = input.value
// 	formular.textContent = `2Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
// }

// formular.addEventListener('submit', odebirat)
//////////////////////////////////////////////////////

