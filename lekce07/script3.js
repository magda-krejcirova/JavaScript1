const fillCut = (str, len) => {
    if (str.length > len) {
        return str.slice(0,len)
    } else if (str.length < len) {
        return str.padStart(len,".")
    } else { 
        return str
    }

}

document.body.innerHTML += fillCut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillCut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillCut('petr', 4) + '<br>'; // vypíše „petr“