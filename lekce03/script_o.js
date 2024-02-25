document.body.innerHTML = "<H1>Realitka</H1>"

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

document.body.innerHTML += apartment.disposition + "<p> </p>"
document.body.innerHTML += apartment.price.rent + "<p> </p>"
document.body.innerHTML += (apartment.area.floorage + apartment.area.balcony) + "<p> </p>"
let adresa = apartment.city + ", " + apartment.district
document.body.innerHTML += adresa + "<p> </p>"
apartment.status = 'taken'
document.body.innerHTML += apartment.status + "<p> </p>"

document.body.innerHTML += "<H1>K N I H O V N A</H1>"

const kniha1 = {
    nazevKnihy: 'Kral Krysa',
    autor: 'James Clavel',
    pocetStran: 250,
    elekForma: true,
    status: {
        pujceno: true,
        rezervace: false,        
    },
    obsah: {
        zanr: 'valecne',
        info: '2.svetova valka',
        ilustrace: false,
    },
    oblibenost: 'stredni',
}

const kniha2 = {
    nazevKnihy: 'Babicka',
    autor: 'Bozka Nemka',
    pocetStran: 350,
    elekForma: false,
    status: {
        pujceno: false,
        rezervace: false,        
    },
    obsah: {
        zanr: 'vesnicky roman',
        info: 'narodni obrozeni',
        ilustrace: true,
    },
    oblibenost: 'mala',
}

document.body.innerHTML += kniha1.nazevKnihy + "<p> </p>"
document.body.innerHTML += kniha2.nazevKnihy + "<p> </p>"

document.body.innerHTML += "<H1>Ockovani - objekt</H1>"

const person = {
    name: 'Kvetoslav Vonavy',
    age: 67,
}
person.comunication = window.navigator.language

document.body.innerHTML += "<p> Jmeno: " + person.name + "</p>"
document.body.innerHTML += "<p> Vek: " + person.age + "</p>"
document.body.innerHTML += "<p> Komunikace: " + person.comunication + "</p>"
