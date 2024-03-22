// const age = 25;
// let price
// if (age > 21) {
//   let price = 100;
//   document.body.innerHTML += `<p>${price}</p>`;
// } else if (age > 15) {
//   let price = 50;
// } else {
//   let price = 0;
// }

// document.body.innerHTML += `<p>${price}</p>`;

// const age = 25;

// if (age > 21) {
//   const price = 100;
//   document.body.innerHTML += `<p>${price}</p>`;
// } else if (age > 15) {
//   const price = 50;
// } else {
//   const price = 0;
// }

// document.body.innerHTML += `<p>${price}</p>`;

// let name = 'Franta';

// const greet = (name) => {
//   let nam = 'Pepa';
//   document.body.innerHTML += `<p>${name}</p>`;
// };

// greet('Jožin');

function myFn() {
    let name = 'Adilijan';
    function inner () {
        console.log('Hi ' + name);
    }
    return inner;
}

let clouser = myFn();
console.log(clouser);
clouser();