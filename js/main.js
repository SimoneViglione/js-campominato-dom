const grid = document.getElementById("field");
const bottoneGriglia = document.getElementById("btn");

bottoneGriglia.addEventListener("click", () => {
  grid.innerHTML = "";

  let punteggio = 0; 

  const numeriBomba = [];

  while (numeriBomba.length < 16) {
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;

    let giàBomba = false;

    for (let i = 0; i < numeriBomba.length; i++) {

      if (numeriBomba[i] === numeroCasuale) {
        giàBomba = true;
        break;
      }
    }

    if (!giàBomba) {
      numeriBomba.push(numeroCasuale);
    }
  }

  for (let i = 1; i <= 100; i++) {
    const quadratiGriglia = document.createElement("div");
    quadratiGriglia.classList.add("quadrato");
    quadratiGriglia.innerText = i;

    let isBomba = false;

    for (let j = 0; j < numeriBomba.length; j++) {
      if (numeriBomba[j] === i) {
        isBomba = true;
        break;
      }
    }

    if (isBomba) {
      quadratiGriglia.addEventListener("click", (event) => {
        event.target.classList.add("bomba");
        alert("BOOM! Hai perso! Punteggio: " + punteggio); 

        for (let i = 0; i < numeriBomba.length; i++) {
          const bomba = document.querySelector(`.quadrato:nth-child(${numeriBomba[i]})`);
          bomba.classList.add("bomba");
        }        
      });
      
    } else {
      quadratiGriglia.addEventListener("click", (event) => {
        event.target.classList.toggle("selezionato");
        punteggio++;
        if (punteggio === 84) { 
          alert("Complimenti! Hai vinto! Punteggio: " + punteggio); 
        }
      });
    }

    grid.append(quadratiGriglia);
  }
});






