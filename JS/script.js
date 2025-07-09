// Dichiarazione funzione
const lampadina = document.getElementById("lampadina");
const myButton = document.getElementById("myButton");

// stato iniziale
let accesa = false; 

myButton.addEventListener("click", function(){
if (accesa) {
  // spenta
  lampadina.src = "white_lamp.png";
  accesa = false;
} else {
  // accesa
  lampadina.src = "yellow_lamp.png" 
  accesa = true
}
})
