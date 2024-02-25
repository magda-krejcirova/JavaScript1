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

  document.body.innerHTML += "Dispozice bytu: " + apartment.disposition + "</p>"
  document.body.innerHTML += "Cisty najem bez poplatku: " + apartment.price.rent + "</p>"
  document.body.innerHTML += "Vymera bytu: " + (apartment.area.floorage+apartment.area.balcony) + "</p>"
  document.body.innerHTML += "Mesto: " + apartment.city + " mestka cast: " + apartment.district + "</p>"
  
  apartment.status = "taken"