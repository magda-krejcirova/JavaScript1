let mujNazevFilmu

let aktualizujNazevFilmu = () => {
  mujNazevFilmu = document.getElementById('mujNazevFilmu')
  vysledekZadani = document.getElementById('vysledekVlastnosti')

  vysledekZadani.innerHTML = zformatujTextPodleZadani(mujNazevFilmu.value)
}

let zformatujTextPodleZadani = (mujText) => {
  let novyText = null
  //Vypište do stránky počet znaků názvu.
  novyText = "Počet znaků názvu: " + mujText.length + "<br>"
  //Vypište název filmu převedený na velká písmena.
  novyText += "Název filmu velkými písmeny: " + mujText.toUpperCase() + "<br>"
  //Vypište z názvu prvních pět písmen.
  novyText += "Prvních pět písmen: " + mujText.slice(0, 5) + "<br>"
  //Vypište z názvu posledních pět písmen.
  novyText += "Posledních pět písmen: " + mujText.slice(-5)

  return novyText
}
