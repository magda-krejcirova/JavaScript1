const age = 25;

if (age > 21) {
  const price = 100;
} else if (age > 15) {
  const price = 50;
} else {
  const price = 0;
}

document.body.innerHTML += `<p>${price}</p>`;

const age2 = 25;
price = 16
if (age > 21) {
  price = 100;
  console.log(price)
} else if (age > 15) {
  let price = 50;
  console.log(price)
} else {
  let price = 0;
  console.log(price)
}

document.body.innerHTML += `<p>${price}</p>`;


sazba = 500;
console.log(sazba)
let vyplata = 8 * 21 * sazba;
document.body.innerHTML += vyplata + "</br>"

sazba = 600;
console.log(sazba)
vyplata = 8 * 21 * sazba;
document.body.innerHTML += vyplata + "</br>"